
import json
from dataclasses import dataclass
from typing import Any, Dict, List

from mannager_internals.cloud_api import (
    cancel_all,
    create_thread,
    generate_project,
    get_ai_messages,
)
from mannager_internals.controllers.linters import fix_all_linters
from mannager_internals.controllers.main import MainController
from mannager_internals.credentials import resolve_headers
from mannager_internals.repositories.project.json_migrations import get_latest_version
from mannager_internals.repositories.project.project import Project, ProjectRepository
from mannager_internals.settings import Settings


@dataclass
class PythonFile:
    filename: str
    content: str
    stage: str

    @staticmethod
    def from_dict(data: Dict[str, Any]) -> "PythonFile":
        return PythonFile(data["filename"], data["content"], data["stage"])


class AiController:
    def __init__(self, controller: MainController):
        self.controller = controller

    def send_ai_message(self, messages, stage, thread_id):
        headers = resolve_headers() or {}
        yield from get_ai_messages(messages, stage, thread_id, headers)

    def create_thread(self):
        headers = resolve_headers()
        if headers is None:
            return None
        return create_thread(headers)

    def cancel_all(self, thread_id: str):
        if headers := resolve_headers():
            cancel_all(headers, thread_id)

    def generate_project(self, prompt: str, tries: int = 0):
        headers = resolve_headers() or {}
        mannager_json_version = get_latest_version()
        try:
            res = generate_project(prompt, mannager_json_version, headers)
            is_mannager_json_valid = Project.validate(res["mannager_json"])
            if not is_mannager_json_valid:
                raise Exception("Generated mannager.json is not valid")

            generated_mannager_json = json.dumps(res["mannager_json"], indent=4)
            python_files = [PythonFile.from_dict(file) for file in res["python_files"]]

            self.init_stages(python_files)
            Settings.root_path.joinpath("mannager.json").write_text(
                generated_mannager_json, encoding="utf-8"
            )

            ProjectRepository.initialize_or_migrate(verbose=False)
            fix_all_linters()
        except Exception as e:
            if tries >= 3:
                raise e
            return self.generate_project(prompt, tries + 1)

    def init_stages(self, python_files: List[PythonFile]):
        for file in python_files:
            if file.stage == "form":
                script = self.controller.create_form(file.filename[:-3], file.filename)
            elif file.stage == "hook":
                script = self.controller.create_hook(file.filename[:-3], file.filename)
            elif file.stage == "script":
                script = self.controller.create_script(
                    file.filename[:-3], file.filename
                )
            elif file.stage == "job":
                script = self.controller.create_job(file.filename[:-3], file.filename)
            else:
                raise Exception(f"Invalid stage {file.stage}")
            script.file_path.write_text(file.content, encoding="utf-8")
