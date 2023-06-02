from fastapi import APIRouter, status
from fastapi_utils.tasks import repeat_every
from app.news.exceptions import internal_server_error
from app.news.helpers.feed import write_to_db
from app.news.repository import news_repo
from app.news.schemas.news import Article

router = APIRouter(
    prefix="/news",
    tags=["News"],
)

@router.get("/", status_code=status.HTTP_200_OK)
def read_root():
    try:
        return news_repo.get_all()
    except Exception:
        raise internal_server_error()
    
@router.post("/create")
def create_news(request: Article):
    return news_repo.put(dict(request))

@router.delete("/delete/{linkId}")
def delete_news(linkId: str):
    return news_repo.delete(linkId)
