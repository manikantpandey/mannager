from typing import List

from mannager_internals.linter.linter import LinterRule

from .conflicting_name import ConflictingName
from .conflicting_path import ConflictingPath
from .duplicate_package_in_requirements import DuplicatePackagesInRequirements
from .env_in_bundle import EnvInBundle
from .missing_mannager_in_requirements import MissingmannagerInRequirements
from .missing_entrypoint import MissingEntrypoint
from .missing_env import MissingEnv
from .missing_packages_in_requirements import MissingPackagesInRequirements
from .new_version_of_mannager_available import NewVersionOfmannagerAvailable
from .psycopg2 import Psycopg2MustBeBinary
from .syntax_errors import SyntaxErrors
from .venv_in_bundle import VenvInBundle

rules: List[LinterRule] = [
    EnvInBundle(),
    VenvInBundle(),
    MissingPackagesInRequirements(),
    SyntaxErrors(),
    MissingEntrypoint(),
    MissingmannagerInRequirements(),
    DuplicatePackagesInRequirements(),
    MissingEnv(),
    NewVersionOfmannagerAvailable(),
    ConflictingPath(),
    Psycopg2MustBeBinary(),
    ConflictingName(),
]
