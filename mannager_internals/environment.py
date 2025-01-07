import os

DEFAULT_LOGLEVEL = "WARNING"
LOGLEVEL = lambda: os.getenv("mannager_LOGLEVEL", DEFAULT_LOGLEVEL)  # noqa: E731
NOISY_LOGLEVEL = lambda: os.getenv("mannager_NOISY_LOGLEVEL", DEFAULT_LOGLEVEL)  # noqa: E731

PROCESS_LOGFORMAT = "[%(asctime)s][%(levelname)s][%(name)s][%(process)d]%(message)s"
DEFAULT_LOGFORMAT = "[%(asctime)s][%(levelname)s][%(name)s] %(message)s"
LOGFORMAT = lambda: os.getenv("mannager_LOGFORMAT", DEFAULT_LOGFORMAT)  # noqa: E731

WORKERS = os.getenv("mannager_WORKERS", 2)
THREADS = os.getenv("mannager_THREADS", 20)
WORKER_TEMP_DIR = os.getenv("mannager_WORKER_TEMP_DIR")
WORKER_CLASS = os.getenv("mannager_WORKER_CLASS", "gthread")

HOST = os.getenv("mannager_HOST", "localhost")
DEFAULT_PORT = os.getenv("PORT") or os.getenv("mannager_SERVER_PORT")

BUILD_ID = os.getenv("mannager_BUILD_ID") or "dev"
PROJECT_ID = os.getenv("mannager_PROJECT_ID") or "dev-project-id"
PROJECT_URL = os.getenv("mannager_PROJECT_URL")

IS_PRODUCTION = os.getenv("mannager_ENVIRONMENT") == "production"
SHOW_WATERMARK = os.getenv("mannager_SHOW_WATERMARK", "false") == "true"

DISABLE_STDIO_PATCH = os.getenv("mannager_DISABLE_STDIO_PATCH", "false") == "true"

CLOUD_API_ENDPOINT = os.getenv("CLOUD_API_ENDPOINT") or "https://cloud-api.mannager.cloud"
CLOUD_API_CLI_URL = f"{CLOUD_API_ENDPOINT}/cli"

PUBLIC_KEY = os.getenv("mannager_JWT_PUBLIC_KEY_PEM")
FILES_FOLDER = os.getenv("mannager_FILES_FOLDER")

SIDECAR_SHARED_TOKEN = os.getenv("mannager_SIDECAR_SHARED_TOKEN", "shared")
SIDECAR_HEADERS = {"shared-token": SIDECAR_SHARED_TOKEN}
SIDECAR_URL = os.getenv("mannager_SIDECAR_URL")

EDITOR_MODE = os.getenv("mannager_EDITOR_MODE") or "local"

RABBITMQ_EXECUTION_QUEUE = os.getenv("mannager_RABBITMQ_EXECUTION_QUEUE", "executions")
RABBITMQ_DEFAUT_EXCHANGE = os.getenv("mannager_RABBITMQ_DEFAUT_EXCHANGE", "")
RABBITMQ_CONNECTION_URI = os.getenv("mannager_RABBITMQ_CONNECTION_URI")
QUEUE_CONCURRENCY = int(os.getenv("mannager_QUEUE_CONCURRENCY", 2))

OIDC_CLIENT_ID = lambda: os.getenv("mannager_OIDC_CLIENT_ID")  # noqa: E731
OIDC_AUTHORITY = lambda: os.getenv("mannager_OIDC_AUTHORITY")  # noqa: E731

__WORKER_UUID_ENV__ = "mannager_WORKER_UUID"
WORKER_UUID = lambda: os.getenv(__WORKER_UUID_ENV__)  # noqa: E731


def set_WORKER_UUID(worker_uuid: str):
    os.environ[__WORKER_UUID_ENV__] = worker_uuid


__SERVER_UUID_ENV__ = "mannager_SERVER_UUID"
SERVER_UUID = lambda: os.getenv(__SERVER_UUID_ENV__)  # noqa: E731


def set_SERVER_UUID(server_uuid: str):
    os.environ[__SERVER_UUID_ENV__] = server_uuid
