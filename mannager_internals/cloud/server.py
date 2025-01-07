from mannager_internals.cloud.server_application import CustomApplication
from mannager_internals.cloud.server_hooks import GunicornOptionsBuilder
from mannager_internals.controllers.main import MainController
from mannager_internals.environment import DEFAULT_PORT
from mannager_internals.logger import mannagerLogger
from mannager_internals.repositories.factory import get_prodution_app_repositories
from mannager_internals.server.apps import get_cloud_app
from mannager_internals.settings import SettingsController
from mannager_internals.stdio_patcher import StdioPatcher


def run():
    mannagerLogger.init("cloud")
    SettingsController.set_root_path(".")
    SettingsController.set_server_port(DEFAULT_PORT)

    controller = MainController(repositories=get_prodution_app_repositories())
    StdioPatcher.apply(controller)

    options = GunicornOptionsBuilder(controller).build()
    app = get_cloud_app(controller)

    CustomApplication(app, options).run()


if __name__ == "__main__":
    run()
