from unittest import TestCase

from mannager_internals.constants import get_persistent_dir
from mannager_internals.utils.dot_mannager import PERSISTENT_DIR
from tests.fixtures import clear_dir, init_dir


class GetPersistentDirTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_value(self):
        self.assertFalse((self.root / PERSISTENT_DIR).exists())
        self.assertEqual(self.root / PERSISTENT_DIR, get_persistent_dir())
        self.assertTrue((self.root / PERSISTENT_DIR).exists())
