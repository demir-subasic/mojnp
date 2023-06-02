from fastapi import APIRouter
from app.report.routers import report_router

router = APIRouter()

router.include_router(report_router.router)
