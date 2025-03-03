from typing import Dict, List, Optional, TypedDict

from mannager_internals.controllers.main import UnknownNodeTypeError
from mannager_internals.repositories.project.project import (
    FormStage,
    HookStage,
    JobStage,
    NotificationTrigger,
    Project,
    ProjectRepository,
    ScriptStage,
    Stage,
    WorkflowTransition,
)


# workflow visual editor
def get_workflow():
    project = ProjectRepository.load()
    return _make_workflow_dto(project)


def build_adjacency_list() -> Dict[str, List[str]]:
    workflow = get_workflow()
    transitions = workflow["transitions"]
    adj = {}
    for t in transitions:
        if t["sourceStageId"] not in adj:
            adj[t["sourceStageId"]] = []
        adj[t["sourceStageId"]].append(t["targetStageId"])
    return adj


def get_initial_stages():
    workflow = get_workflow()
    stages = workflow["stages"]
    target_stage_ids = set([t["targetStageId"] for t in workflow["transitions"]])
    return [s for s in stages if s["id"] not in target_stage_ids]


def get_path(n: int):
    adj = build_adjacency_list()
    initial_stages = get_initial_stages()
    longest_path = []

    def dfs(stage_id: str, current_path: List[str]):
        if stage_id in current_path:
            return
        current_path = current_path.copy()
        current_path.append(stage_id)
        if len(current_path) > len(longest_path):
            longest_path.clear()
            longest_path.extend(current_path)
        for next_stage_id in adj.get(stage_id, []):
            dfs(next_stage_id, current_path)

    for stage in initial_stages:
        dfs(stage["id"], [])

    return longest_path[:n]


class StageDTO(TypedDict):
    id: str
    type: str
    title: str
    position: Dict[str, float]
    props: Dict[str, Optional[str]]


def make_stage_dto(stage: Stage) -> StageDTO:
    filename = None
    if isinstance(stage, (HookStage, ScriptStage, FormStage, JobStage)):
        filename = stage.file
    path = None
    if isinstance(stage, (FormStage, HookStage)):
        path = stage.path
    return StageDTO(
        id=stage.id,
        type=stage.type_name + "s",
        title=stage.title,
        position=dict(
            x=stage.workflow_position[0],
            y=stage.workflow_position[1],
        ),
        props={
            "filename": filename,
            "path": path,
        },
    )


def _make_workflow_dto(project: Project):
    stages = []
    for stage in project.workflow_stages:
        stage_dto = make_stage_dto(stage)

        if (
            isinstance(stage, FormStage)
            or isinstance(stage, ScriptStage)
            or isinstance(stage, HookStage)
            or isinstance(stage, JobStage)
        ):
            stage_dto["props"]["filename"] = stage.file

        if isinstance(stage, FormStage) or isinstance(stage, HookStage):
            stage_dto["props"]["path"] = stage.path

        stages.append(stage_dto)

    transitions = []
    for stage in project.workflow_stages:
        for transition in stage.workflow_transitions:
            props: dict = {"taskType": None}

            if transition.task_type is not None:
                props["taskType"] = transition.task_type

            transitions.append(
                dict(
                    id=transition.id,
                    sourceStageId=stage.id,
                    targetStageId=transition.target_id,
                    type=transition.type,
                    props=props,
                )
            )

    return dict(
        stages=stages,
        transitions=transitions,
    )


def update_workflow(workflow_state_dto: Dict):
    project = ProjectRepository.load()

    for stage_dto in workflow_state_dto["stages"]:
        stage = project.get_stage(stage_dto["id"])
        if stage is not None:
            stage.workflow_position = (
                stage_dto["position"]["x"],
                stage_dto["position"]["y"],
            )
            stage.title = stage_dto["title"]
            if (
                isinstance(stage, FormStage)
                or isinstance(stage, ScriptStage)
                or isinstance(stage, HookStage)
                or isinstance(stage, JobStage)
            ):
                stage.file = f"{stage_dto['props']['filename']}"
            if isinstance(stage, FormStage) or isinstance(stage, HookStage):
                stage.path = stage_dto["props"]["path"]
        elif stage_dto["type"] == "forms":
            stage = FormStage(
                id=stage_dto["id"],
                path=stage_dto["props"]["path"],
                file=f"{stage_dto['props']['filename']}",
                title=stage_dto["title"],
                workflow_transitions=[],
                is_initial=False,
                workflow_position=(
                    stage_dto["position"]["x"],
                    stage_dto["position"]["y"],
                ),
                notification_trigger=NotificationTrigger(
                    variable_name="assignee_emails",
                    enabled=False,
                ),
            )
            project.forms.append(stage)
        elif stage_dto["type"] == "scripts":
            stage = ScriptStage(
                file=f"{stage_dto['props']['filename']}",
                is_initial=False,
                id=stage_dto["id"],
                title=stage_dto["title"],
                workflow_position=(
                    stage_dto["position"]["x"],
                    stage_dto["position"]["y"],
                ),
                workflow_transitions=[],
            )
            project.scripts.append(stage)
        elif stage_dto["type"] == "hooks":
            stage = HookStage(
                id=stage_dto["id"],
                enabled=True,
                file=f"{stage_dto['props']['filename']}",
                is_initial=False,
                path=stage_dto["props"]["path"],
                title=stage_dto["title"],
                workflow_position=(
                    stage_dto["position"]["x"],
                    stage_dto["position"]["y"],
                ),
                workflow_transitions=[],
            )
            project.hooks.append(stage)
        elif stage_dto["type"] == "jobs":
            stage = JobStage(
                file=f"{stage_dto['props']['filename']}",
                id=stage_dto["id"],
                schedule="0 * * * *",
                title=stage_dto["title"],
                workflow_position=(
                    stage_dto["position"]["x"],
                    stage_dto["position"]["y"],
                ),
                workflow_transitions=[],
            )
            project.jobs.append(stage)
        else:
            raise UnknownNodeTypeError(stage_dto["type"])

    # Delete removed stages
    for stage in project.workflow_stages:
        if stage.id not in [s["id"] for s in workflow_state_dto["stages"]]:
            project.delete_stage(stage.id)

    for stage in project.workflow_stages:
        stage.workflow_transitions = []
        for transition in workflow_state_dto["transitions"]:
            props = transition.get("props", {})
            task_type = props.get("taskType", None)
            if transition["sourceStageId"] == stage.id:
                target = project.get_stage(transition["targetStageId"])
                assert target is not None
                stage.workflow_transitions.append(
                    WorkflowTransition(
                        id=transition["id"],
                        type=transition["type"],
                        target_id=transition["targetStageId"],
                        target_type=target.type_name + "s",
                        task_type=task_type,
                    )
                )

    ProjectRepository.save(project)

    return _make_workflow_dto(project)
