import threading
import webbrowser

from mannager_internals.environment import HOST
from mannager_internals.settings import Settings


def browser_open_editor():
    threading.Timer(
        1, lambda: webbrowser.open(f"http://{HOST}:{Settings.server_port}/_editor")
    ).start()
