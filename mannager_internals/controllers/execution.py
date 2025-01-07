from typing import Optional, Union

from mannager_internals.controllers.execution_client import (
    ExecutionClient,
    HeadlessClient,
)
from mannager_internals.controllers.execution_target import ExecutionTarget
from mannager_internals.entities.execution import Execution, PreExecution
from mannager_internals.entities.execution_context import (
    ClientContext,
    JobContext,
    ScriptContext,
)
from mannager_internals.repositories.factory import Repositories
from mannager_internals.repositories.project.project import Stage


class NotStartedException(Exception):
    pass


class ExecutionController:
    def __init__(
        self,
        *,
        repositories: Repositories,
    ) -> None:
        self.repositories = repositories

    def submit(
        self,
        stage: Stage,
        context: Union[ScriptContext, JobContext],
    ):
        return self.repositories.producer.submit(
            PreExecution(
                context=context,
                stage_id=stage.id,
            )
        )

    def run(
        self,
        *,
        stage: Stage,
        client: Optional[ExecutionClient] = None,
        context: Optional[ClientContext] = None,
    ):
        if not client:
            client = HeadlessClient()

        execution = Execution.create(
            context=context,
            stage_id=stage.id,
        )

        ExecutionTarget(
            stage=stage,
            client=client,
            execution=execution,
            repositories=self.repositories,
        )
