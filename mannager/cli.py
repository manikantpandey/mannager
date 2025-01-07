from typing import Optional

import fire

from mannager_internals.interface.cli.deploy import deploy
from mannager_internals.interface.cli.dir import select_dir
from mannager_internals.interface.cli.editor import editor
from mannager_internals.interface.cli.start import start
from mannager_internals.interface.cli.tables import dump, restore
from mannager_internals.interface.cli.version import version
from mannager_internals.settings import SettingsController


class CLI(object):
    """
    A CLI to manage your mannager Cloud project environment.

    usage: mannager <command> <resource> [<argument> ...] [parameters]
    """

    def version(self):
        version()

    def deploy(self, root_dir: Optional[str] = None):
        SettingsController.set_root_path(root_dir or select_dir())
        deploy()

    def editor(self, root_dir: Optional[str] = None, port: int = 3000, headless=False):
        SettingsController.set_root_path(root_dir or select_dir())
        SettingsController.set_server_port(port)
        editor(headless=headless)

    def serve(self, root_dir: Optional[str] = None, port: int = 3000, headless=False):
        print("This command is deprecated. Please use 'mannager editor' instead.")
        self.editor(root_dir=root_dir, port=port, headless=headless)

    def dump(self, root_dir: str = "."):
        SettingsController.set_root_path(root_dir)
        dump()

    def restore(self, root_dir: str = "."):
        SettingsController.set_root_path(root_dir)
        restore()

    def start(self, root_dir: Optional[str] = None, token: Optional[str] = None):
        SettingsController.set_root_path(root_dir or select_dir())
        start(token)


def _SeparateFlagArgs(args):
    try:
        index = args.index("--help")
        args = args[:index]
        return args, ["--help"]
    except ValueError:
        return args, []


def main():
    fire.core.parser.SeparateFlagArgs = _SeparateFlagArgs  # type: ignore
    fire.Fire(CLI)


if __name__ == "__main__":
    main()
