from typing import List

from mannager_internals.linter.linter import LinterFix, LinterIssue, LinterRule
from mannager_internals.settings import Settings
from mannager_internals.utils.file import files_from_directory


class AddEnvTomannagerIgnore(LinterFix):
    label = "Add env to mannager ignore"

    def fix(self):
        mannagerignore_file = Settings.root_path / ".mannagerignore"
        with mannagerignore_file.open("a") as file:
            file.write("\n.env")


class EnvInBundleFound(LinterIssue):
    def __init__(self) -> None:
        self.label = "You have not ignored the .env file"
        self.fixes = [AddEnvTomannagerIgnore()]


class EnvInBundle(LinterRule):
    label = "You can't add .env to the bundle"
    type = "security"

    def find_issues(self) -> List[LinterIssue]:
        env_file = Settings.root_path / ".env"

        bundle_files = files_from_directory(Settings.root_path)

        if env_file in bundle_files:
            return [EnvInBundleFound()]
        else:
            return []
