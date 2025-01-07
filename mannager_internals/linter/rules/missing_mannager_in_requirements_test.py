import pkg_resources
from pkg_resources import get_distribution as gd

from mannager_internals.linter.rules.missing_mannager_in_requirements import (
    mannagerVersionInRequirementsIsBehindInstalled,
    MissingmannagerInRequirements,
)
from tests.fixtures import BaseTest


def mock_get_distribution(name):
    if name == "mannager":
        return pkg_resources.Distribution(project_name="mannager", version="1.0.0")
    else:
        return gd(name)


class MissingmannagerInRequirementsTest(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        self.old_get_distribution = pkg_resources.get_distribution
        pkg_resources.get_distribution = mock_get_distribution

    def tearDown(self) -> None:
        pkg_resources.get_distribution = self.old_get_distribution
        super().tearDown()

    def test_missing_mannager_in_requirements_valid_with_requirements(self):
        rule = MissingmannagerInRequirements()
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text("mannager==1.0.0")
        self.assertEqual(len(rule.find_issues()), 0)

    def test_missing_mannager_in_requirements_invalid_with_different_version(self):
        rule = MissingmannagerInRequirements()
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text("mannager==0.0.1")
        issues = rule.find_issues()
        self.assertEqual(len(issues), 1)
        self.assertIsInstance(issues[0], mannagerVersionInRequirementsIsBehindInstalled)

    def test_missing_mannager_in_requirements_invalid_without_requirements(self):
        rule = MissingmannagerInRequirements()
        self.assertEqual(len(rule.find_issues()), 1)

    def test_missing_mannager_in_requirements_fix(self):
        rule = MissingmannagerInRequirements()
        self.assertEqual(len(rule.find_issues()), 1)
        rule.find_issues()[0].fixes[0].fix()
        self.assertEqual(len(rule.find_issues()), 0)
        requirements_txt = self.root / "requirements.txt"
        self.assertTrue(requirements_txt.exists())
        with requirements_txt.open("r") as file:
            content = file.read()
            self.assertTrue("mannager==1.0.0" in content)
