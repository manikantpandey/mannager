import os
import unittest
from pathlib import Path

IGNORED_FOLDER = "templates/getting-started-project"


class TestInitFiles(unittest.TestCase):
    def setUp(self) -> None:
        self.lib_root = Path(__file__).parent.parent
        print(f"Library root: {self.lib_root}")

    def collect_all_folders(self, root):
        folders = []
        for dirpath, dirnames, filenames in os.walk(root):
            if any(skip in dirpath for skip in [".git", "__pycache__", ".venv"]):
                continue
            if not filenames and not dirnames:
                continue
            folders.append(dirpath)
        return folders

    def verify_each_folder(self, folders):
        for folder in folders:
            if folder.endswith(IGNORED_FOLDER):
                continue
            with self.subTest(folder=folder):
                init_file = os.path.join(folder, "__init__.py")

                py_files = [file for file in os.listdir(folder) if file.endswith(".py")]

                if len(py_files) and not os.path.exists(init_file):
                    self.fail(f"Missing __init__.py file in folder '{folder}'")

    def test_init_file_exists_mannager(self):
        folders = self.collect_all_folders(self.lib_root / "mannager")
        self.verify_each_folder(folders)

    def test_init_file_exists_mannager_internals(self):
        folders = self.collect_all_folders(self.lib_root / "mannager_internals")
        self.verify_each_folder(folders)

    def test_init_file_exists_mannager_statics(self):
        folders = self.collect_all_folders(self.lib_root / "mannager_statics")
        self.verify_each_folder(folders)


if __name__ == "__main__":
    unittest.main()
