from concurrent.futures import ThreadPoolExecutor
from uuid import uuid4

from mannager_internals.controllers.execution_process import ExecutionProcess
from mannager_internals.controllers.main import MainController
from mannager_internals.environment import QUEUE_CONCURRENCY
from mannager_internals.logger import mannagerLogger
from mannager_internals.repositories.consumer import Consumer, QueueMessage
from mannager_internals.settings import Settings


class StageNotFound(Exception):
    pass


class NonCleanExit(Exception):
    pass


# should be smaller than the RabbitMQ consumer timeout (24h now)
PROCESS_TIMEOUT = 6 * 60 * 60


def PreExecController(
    *,
    controller: MainController,
    consumer: Consumer,
    msg: QueueMessage,
    arbiter_uuid: str,
):
    worker_uuid = str(uuid4())
    head_id = worker_uuid.split("-")[0]

    try:
        mp_context = controller.repositories.mp_context.get_context()
        stage = controller.get_action(msg.preexecution.stage_id)
        if stage is None:
            raise StageNotFound(msg.preexecution.stage_id)

        p = mp_context.Process(
            target=ExecutionProcess,
            kwargs=dict(
                stage=stage,
                controller=controller,
                worker_uuid=worker_uuid,
                arbiter_uuid=arbiter_uuid,
                root_path=Settings.root_path,
                server_port=Settings.server_port,
                request=msg.preexecution.context,
                environment=mannagerLogger.environment,
            ),
            name=f"Worker-{head_id}",
        )

        p.start()
        p.join(timeout=PROCESS_TIMEOUT)
        consumer.done_callback(msg)

        if p.is_alive():
            p.terminate()
            raise NonCleanExit(f"Worker took too long to complete ({PROCESS_TIMEOUT})")

        if p.exitcode != 0:
            err_msg = f"Worker exited with status ({p.exitcode})"
            if p.exitcode == -9:
                err_msg += ": Server reached its memory limit"

            raise NonCleanExit(err_msg)
    except Exception as e:
        mannagerLogger.error(f"[{head_id}] PreExecController ERROR: aborting consumer")
        mannagerLogger.capture_exception(e)
        controller.child_exit(
            app_id=arbiter_uuid, worker_id=worker_uuid, err_msg=f"[ABORTED] {e.args}"
        )
        consumer.stop()


class Arbiter:
    def __init__(self, controller: MainController):
        self.controller = controller
        self.uuid = str(uuid4())

    @property
    def head_id(self) -> str:
        return self.uuid.split("-")[0]

    def __enter__(self):
        mannagerLogger.debug(f"[{self.head_id}] ARBITER INIT")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        mannagerLogger.debug(f"[{self.head_id}] ARBITER EXIT")
        self.controller.self_exit(app_id=self.uuid, err_msg="[ABORTED] Worker exited")


def ExecutionConsumer(consumer: Consumer, controller: MainController):
    with Arbiter(controller) as arbiter:
        with ThreadPoolExecutor(max_workers=QUEUE_CONCURRENCY) as executor:
            try:
                for msg in consumer.iter():
                    executor.submit(
                        PreExecController,
                        arbiter_uuid=arbiter.uuid,
                        controller=controller,
                        consumer=consumer,
                        msg=msg,
                    )
            except Exception as e:
                mannagerLogger.capture_exception(e)
