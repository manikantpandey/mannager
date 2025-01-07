from typing import List

from mannager_internals.linter.linter import LinterFix, LinterIssue, LinterRule
from mannager_internals.services.requirements import RequirementsRepository
from mannager_internals.utils import packages as pkg_utils


class AddmannagerToRequirements(LinterFix):
    label = "Add mannager to requirements.txt"

    def fix(self):
        requirements = RequirementsRepository.load()
        local_version = pkg_utils.get_local_package_version()

        requirements.ensure("mannager", str(local_version))
        RequirementsRepository.save(requirements)


class SetmannagerVersionInRequirements(LinterFix):
    label = "Set mannager version in requirements.txt"

    def fix(self):
        requirements = RequirementsRepository.load()
        local_version = pkg_utils.get_local_package_version()

        requirements.ensure("mannager", str(local_version))
        RequirementsRepository.save(requirements)


class mannagerNotInRequirementsFound(LinterIssue):
    def __init__(self) -> None:
        self.label = "mannager is not in your requirements.txt file."
        self.fixes = [AddmannagerToRequirements()]


class mannagerVersionNotDefined(LinterIssue):
    def __init__(self) -> None:
        self.label = (
            "You have mannager in requirements.txt, but the version is not defined."
        )
        self.fixes = [SetmannagerVersionInRequirements()]


class mannagerVersionInRequirementsIsAheadOfInstalled(LinterIssue):
    def __init__(self) -> None:
        self.label = "The version of mannager in your requirements.txt is ahead of the installed version. Close this server and run 'pip install -r requirements.txt' to fix this."
        self.fixes = []


class mannagerVersionInRequirementsIsBehindInstalled(LinterIssue):
    def __init__(self) -> None:
        self.label = "The version of mannager in your requirements.txt is behind the installed version. Update your requirements.txt to fix this."
        self.fixes = [SetmannagerVersionInRequirements()]


class MissingmannagerInRequirements(LinterRule):
    label = "mannager should be in your requirements.txt"
    type = "bug"

    def find_issues(self) -> List[LinterIssue]:
        requirements = RequirementsRepository.load()
        local_version = pkg_utils.get_local_package_version()

        if not requirements.has("mannager"):
            return [mannagerNotInRequirementsFound()]

        if requirements.has("mannager", str(local_version)):
            return []

        requirements_version = requirements.get("mannager")
        if requirements_version is None:
            return [mannagerVersionNotDefined()]

        if pkg_utils.parse_version(requirements_version) > local_version:
            return [mannagerVersionInRequirementsIsAheadOfInstalled()]
        else:
            return [mannagerVersionInRequirementsIsBehindInstalled()]
