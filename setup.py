import pathlib
from setuptools import find_packages, setup

# The directory containing this file
HERE = pathlib.Path(__file__).parent

# The list of requirements
REQUIREMENTS = (HERE / "requirements.txt").read_text(encoding="utf-8").split("\n")

# Version
VERSION_FILE = HERE / "VERSION"
if VERSION_FILE.exists():
    VERSION = VERSION_FILE.read_text(encoding="utf-8").strip()
else:
    VERSION = "0.0.0"  # Default version if VERSION file does not exist

setup(
    name="mannager",
    version=VERSION,
    description="mannager CLI",
    python_requires=">=3.8, <4",
    entry_points={
        "console_scripts": [
            "mannager=mannager.cli:main",  # CLI entry point
        ],
    },
    packages=find_packages(exclude=["tests"]),
    install_requires=REQUIREMENTS,
)
