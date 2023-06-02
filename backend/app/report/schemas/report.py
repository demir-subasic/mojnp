from pydantic import BaseModel


class Report(BaseModel):
    name: str
    email: str
    phone: str
    address: str
    files: list
    location: str
    field: str
    description: str
