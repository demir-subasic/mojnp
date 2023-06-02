from fastapi import APIRouter
from app.report.repo import report_repo
from app.report.schemas.report import Report

router = APIRouter(
    prefix="/report",
    tags=["Report"],
)


@router.post("/")
async def create_report(request: Report):
    return report_repo.create_report(dict(request))
