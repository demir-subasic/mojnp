from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.news import news_router
from app.report import report as report_router
from app.tourism import tourism_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(news_router.router)
app.include_router(tourism_router.router)
app.include_router(report_router.router)
