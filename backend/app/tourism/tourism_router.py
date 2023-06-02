from fastapi import APIRouter
from app.tourism.routers import tourism

router = APIRouter()

router.include_router(tourism.router)
