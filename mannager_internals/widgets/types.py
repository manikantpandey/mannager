from typing import Any, TypedDict, Union


class LabelValueOption(TypedDict):
    label: str
    value: Any


mannagerOption = Union[str, LabelValueOption]
