from pydantic import  BaseModel

class Article(BaseModel):
    title: str
    description: str
    author: str
    link: str
    linkId: str
    published: str
    image:str
    summary: str
    content: str
