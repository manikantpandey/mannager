from typing import List

from mannager_internals.email_templates.i18n import get_translation
from mannager_internals.repositories.email import EmailParams
from mannager_internals.repositories.project.project import ProjectRepository


def generate_email(to: List[str], message: str, title: str) -> EmailParams:
    project = ProjectRepository.load()
    translations = get_translation(project.workspace.language or "en")

    subject = translations.message_from(project.workspace.project_name)
    if title:
        subject += f": {title}"

    return EmailParams(
        kind="message",
        to=to,
        subject=subject,
        body=message,
        is_html=False,
    )
