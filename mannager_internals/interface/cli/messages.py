from colorama import Fore, Style

from mannager_internals.environment import HOST
from mannager_internals.settings import Settings


def serve_message():
    print(
        Fore.MAGENTA
        + Style.BRIGHT
        + f"\n\nmannager EDITOR RUNNING: http://{HOST}:{Settings.server_port}/_editor\n\n"
        + Style.RESET_ALL
    )
