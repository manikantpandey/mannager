import tempfile
import unittest
from pathlib import Path

from mannager_internals.interface.cli.start import start
from mannager_internals.settings import SettingsController
from tests.fixtures import clear_dir, init_dir


class TestStart(unittest.TestCase):
    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_project_create_files_correctly(self):
        self.root = Path(tempfile.mkdtemp())
        SettingsController.set_root_path(self.root.as_posix())

        start()
        self.assertTrue((self.root / "mannager.json").exists())
        self.assertTrue((self.root / ".mannagerignore").exists())
        self.assertTrue((self.root / ".gitignore").exists())
        self.assertTrue((self.root / "application_form.py").exists())
        self.assertTrue((self.root / "application_review.py").exists())

    def test_dont_generate_project_if_there_is_a_project_in_directory(self):
        self.root = init_dir()

        self.assertTrue((self.root / "mannager.json").exists())

        start()
        self.assertFalse((self.root / "application_form.py").exists())

    def test_create_project_with_credentials(self):
        self.root = Path(tempfile.mkdtemp())
        SettingsController.set_root_path(self.root.as_posix())

        start(credential_token="test_token")
        self.assertTrue((self.root / ".mannager" / "credentials").exists())
        self.assertEqual(
            (self.root / ".mannager" / "credentials").read_text(), "test_token"
        )
