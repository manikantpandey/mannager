import json

import requests

from mannager_internals.credentials import resolve_headers
from mannager_internals.environment import CLOUD_API_CLI_URL
from mannager_internals.interface.cli.tables_messages import (
    bad_json_error_message,
    dump_message,
    file_not_found_error_message,
    generic_error,
    restore_message,
    zod_error_message,
)
from mannager_internals.logger import mannagerLogger
from mannager_internals.settings import Settings
from mannager_internals.utils.file import mannager_TABLES_FILE


def dump():
    headers = resolve_headers()
    url = f"{CLOUD_API_CLI_URL}/tables/dump"
    try:
        res = requests.get(url, headers=headers)
        res.raise_for_status()
        res_json = res.json()
        json_str = json.dumps(res_json, indent=2)
        Settings.root_path.joinpath(mannager_TABLES_FILE).write_text(
            json_str, encoding="utf-8"
        )
        num_tables = len(res_json["tables"])
        dump_message(num_tables)
    except Exception as e:
        mannagerLogger.capture_exception(e)
        generic_error()


def restore():
    headers = resolve_headers()
    url = f"{CLOUD_API_CLI_URL}/tables/restore"
    try:
        json_content = Settings.root_path.joinpath(mannager_TABLES_FILE).read_text(
            encoding="utf-8"
        )
        tables_to_restore = json.loads(json_content)
        res = requests.post(url, json=tables_to_restore, headers=headers)
        if res.status_code == 400:
            zod_error_message()
            return
        res.raise_for_status()
        num_tables = len(tables_to_restore["tables"])
        restore_message(num_tables)
    except FileNotFoundError:
        file_not_found_error_message()
    except json.JSONDecodeError:
        bad_json_error_message()
    except Exception as e:
        mannagerLogger.capture_exception(e)
        generic_error()
