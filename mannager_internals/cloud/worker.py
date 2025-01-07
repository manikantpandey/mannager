from multiprocessing.forkserver import set_forkserver_preload

from mannager_internals.controllers import execution_process
from mannager_internals.controllers.execution_consumer import ExecutionConsumer
from mannager_internals.controllers.main import MainController
from mannager_internals.environment import DEFAULT_PORT, RABBITMQ_CONNECTION_URI
from mannager_internals.logger import mannagerLogger
from mannager_internals.repositories.consumer import RabbitConsumer
from mannager_internals.repositories.factory import get_prodution_app_repositories
from mannager_internals.settings import SettingsController
from mannager_internals.signals import SignalHandlers


def run():
    SignalHandlers.init()
    mannagerLogger.init("cloud")
    SettingsController.set_root_path(".")
    SettingsController.set_server_port(DEFAULT_PORT)

    if not RABBITMQ_CONNECTION_URI:
        raise Exception("RABBITMQ_CONNECTION_URI not found")

    set_forkserver_preload([execution_process.__name__])
    controller = MainController(repositories=get_prodution_app_repositories())
    with RabbitConsumer(RABBITMQ_CONNECTION_URI) as consumer:
        SignalHandlers.register_sigterm_callback(consumer.stop)
        ExecutionConsumer(consumer, controller)


if __name__ == "__main__":
    run()
