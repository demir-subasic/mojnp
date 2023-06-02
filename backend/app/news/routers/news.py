from fastapi import APIRouter, status
from fastapi_utils.tasks import repeat_every
from app.news.exceptions import internal_server_error
from app.news.helpers.feed import write_to_db

current_urls = [
    "https://rtvnp.rs/feed/",
    "https://sandzakpress.net/feed/",
    "https://sandzakhaber.net/feed/",
    "https://www.sandzakdanas.rs/feed",
]

router = APIRouter(prefix="/generator", tags=["News"])



@router.post("/generate", status_code=status.HTTP_201_CREATED)
def add():
    try:
        return write_to_db(current_urls)
    except Exception:
        raise internal_server_error()




@router.on_event("startup")
@repeat_every(seconds=60 * 60)
async def startup_event():
    try:
        write_to_db(current_urls)
        print("News updated")
        return True
    except Exception:
        raise internal_server_error()
