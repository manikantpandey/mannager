import threading

from dotenv import load_dotenv
from werkzeug.serving import make_server

from mannager_internals.controllers.execution_consumer import ExecutionConsumer
from mannager_internals.controllers.main import MainController
from mannager_internals.environment import HOST
from mannager_internals.fs_watcher import watch_file_change_events
from mannager_internals.interface.cli.messages import serve_message
from mannager_internals.logger import mannagerLogger
from mannager_internals.repositories.consumer import EditorConsumer
from mannager_internals.repositories.factory import get_editor_repositories
from mannager_internals.repositories.producer import LocalProducerRepository
from mannager_internals.resources_watcher import resources_polling_loop
from mannager_internals.server.apps import get_local_app
from mannager_internals.settings import Settings
from mannager_internals.stdio_patcher import StdioPatcher
from mannager_internals.utils.browser import browser_open_editor
from mannager_internals.version import check_latest_version


def start_consumer(controller: MainController):
    if not isinstance(controller.producer_repository, LocalProducerRepository):
        raise ValueError("Invalid producer repository")

    consumer = EditorConsumer(controller.producer_repository.queue)

    th = threading.Thread(
        daemon=True,
        name="execution_consumer",
        target=ExecutionConsumer,
        kwargs=dict(controller=controller, consumer=consumer),
    )

    th.start()

    return consumer, th


def start_file_watcher():
    threading.Thread(
        daemon=True,
        name="file_watcher",
        target=watch_file_change_events,
    ).start()


def start_resources_watcher():
    threading.Thread(
        daemon=True,
        name="resources_watcher",
        target=resources_polling_loop,
    ).start()


def editor(headless: bool):
    load_dotenv(Settings.root_path / ".env")
    serve_message()
    check_latest_version()
    mannagerLogger.init("local")

    controller = MainController(repositories=get_editor_repositories())
    controller.reset_repositories()
    StdioPatcher.apply(controller)

    start_file_watcher()
    start_resources_watcher()
    start_consumer(controller)

    app = get_local_app(controller)
    server = make_server(host=HOST, port=Settings.server_port, threaded=True, app=app)

    if not headless:
        browser_open_editor()

    server.serve_forever()
