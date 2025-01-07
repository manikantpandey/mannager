from typing import Optional

from mannager_internals.credentials import set_credentials
from mannager_internals.repositories.project.project import ProjectRepository
from mannager_internals.usage import editor_manual_usage


# def start(credential_token: Optional[str] = None):
#     if ProjectRepository.exists():
#         print("This directory already has an mannager project.")
#         print("\nRun 'mannager editor' in the directory to start the editor.")
#         editor_manual_usage(
#             event="run_mannager_start_on_existing_project",
#             payload=dict(),
#         )
#         return

#     ProjectRepository.generate_getting_started_project()

#     if credential_token:
#         set_credentials(credential_token)

#     editor_manual_usage(
#         event="run_mannager_start_successfully",
#         payload=dict(),
#     )

#     print("Project initialized successfully.")
#     print("\nRun 'mannager editor' in the directory to start the editor.")


def start():
    if ProjectRepository.exists():
        print("This directory already has a mannager project.")
        print("\nRun 'mannager editor' in the directory to start the editor.")
        return

    ProjectRepository.generate_getting_started_project()
    print("Project initialized successfully.")
    print("\nRun 'mannager editor' in the directory to start the editor.")
