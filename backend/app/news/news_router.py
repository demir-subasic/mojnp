from fastapi import APIRouter
from app.news.routers import news, news_crud

router = APIRouter()

router.include_router(news.router)
router.include_router(news_crud.router)

