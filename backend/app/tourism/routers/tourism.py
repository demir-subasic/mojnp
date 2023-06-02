from fastapi import APIRouter, status
from app.tourism.repository import tourism_repo
from app.tourism.schemas.tourism_schema import Monument

router = APIRouter(prefix="/tourism", tags=["Tourism"])


@router.get("/", status_code=status.HTTP_200_OK)
async def get_all():
    return tourism_repo.get_all()


@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_one(data: Monument):
    return tourism_repo.create_one(data)
