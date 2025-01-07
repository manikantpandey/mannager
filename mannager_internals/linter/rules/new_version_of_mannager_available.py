import webbrowser
from typing import List

from mannager_internals.linter.linter import LinterFix, LinterIssue, LinterRule
from mannager_internals.version import PackageVersionManager, VersionStatus

RELEASE_NOTES_URL = "https://github.com/mannager-app/mannager-lib/releases"


class OpenChangeLog(LinterFix):
    def __init__(self) -> None:
        self.label = "Open the release notes"

    def fix(self):
        webbrowser.open(RELEASE_NOTES_URL)


class NewVersionOfmannagerAvailableFound(LinterIssue):
    def __init__(self) -> None:
        package_version = PackageVersionManager("mannager")
        self.label = f"Latest version is {package_version.cached_latest_version}, but you have {package_version.current_local_version}."
        self.fixes = [OpenChangeLog()]


class NewVersionOfmannagerAvailable(LinterRule):
    label = "A new version of mannager Editor is available"
    type = "info"

    def find_issues(self) -> List[LinterIssue]:
        package_version = PackageVersionManager("mannager")
        version_status = package_version.get_version_status()
        is_there_a_new_version = version_status == VersionStatus.OUT_OF_DATE

        if is_there_a_new_version is True:
            return [NewVersionOfmannagerAvailableFound()]
        else:
            return []
