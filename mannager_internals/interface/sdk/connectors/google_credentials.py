from mannager_internals.controllers.sdk_context import SDKContextStore
from mannager_internals.interface.sdk.user_exceptions import MissingDependencyError
from mannager_internals.utils.datetime import from_utc_iso_string


def create_mannager_google_credentials(connection_name: str):
    try:
        from google.auth.credentials import (  # type: ignore
            Credentials as BaseCredentials,
        )
    except ImportError:
        raise MissingDependencyError("google-auth")

    class mannagerGoogleCredentials(BaseCredentials):
        def __init__(self, connection_name: str) -> None:
            super().__init__()
            context = SDKContextStore.get_by_thread()
            self.repository = context.repositories.connectors
            self.connection_name = connection_name

        def refresh(self, request):
            dto = self.repository.get_access_token(self.connection_name)
            self.expiry = from_utc_iso_string(dto.expiresAt)
            self.expiry = self.expiry.replace(tzinfo=None)
            self.token = dto.token

    return mannagerGoogleCredentials(connection_name)
