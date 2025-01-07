from typing import Optional

from mannager_internals.controllers.execution import ExecutionController
from mannager_internals.controllers.main import MainController
from mannager_internals.entities.execution import ClientContext
from mannager_internals.environment import set_SERVER_UUID, set_WORKER_UUID
from mannager_internals.logger import mannagerLogger, Environment
from mannager_internals.repositories.project.project import Stage
from mannager_internals.settings import Settings
from mannager_internals.stdio_patcher import StdioPatcher


# runs in subprocess - all arguments must be picklable/multiprocessable
def ExecutionProcess(
    *,
    root_path: str,
    server_port: int,
    worker_uuid: str,
    arbiter_uuid: str,
    stage: Stage,
    controller: MainController,
    environment: Optional[Environment],
    request: Optional[ClientContext] = None,
):
    Settings.set_root_path(root_path)
    Settings.set_server_port(server_port, force=True)
    mannagerLogger.init(environment)

    set_WORKER_UUID(worker_uuid)
    set_SERVER_UUID(arbiter_uuid)
    StdioPatcher.apply(controller)

    head_id = worker_uuid.split("-")[0]

    mannagerLogger.debug(f"[{head_id}] WORKER INIT")

    try:
        ExecutionController(
            repositories=controller.repositories,
        ).run(
            stage=stage,
            context=request,
        )
    except Exception as e:
        mannagerLogger.error(f"[{head_id}] WORKER ERROR: {e}")
        mannagerLogger.capture_exception(e)
    finally:
        mannagerLogger.debug(f"[{head_id}] WORKER EXIT")
