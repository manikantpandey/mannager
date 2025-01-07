import flask

from mannager_internals.controllers.main import MainController
from mannager_internals.server.utils import send_from_dist
from mannager_internals.settings import Settings


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_assets", __name__)

    @bp.get("/<path:path>")
    def _asset(path):
        return send_from_dist(path, dist_folder=Settings.root_path)

    return bp
