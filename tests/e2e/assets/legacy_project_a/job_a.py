from mannager.compat import use_legacy_threads

use_legacy_threads("jobs")

from pathlib import Path  # noqa: E402

from mannager.workflows import set_data  # noqa: E402

set_data("key_a", "job a set this")
set_data("key_x", "job a set this")

Path("job_a.log").write_text("job ran successfully")
