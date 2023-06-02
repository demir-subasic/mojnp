from pydantic import BaseModel


class Monument(BaseModel):
    name: str
    description: str
    location: str
