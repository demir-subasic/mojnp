from app.tourism.data_access.tourism_db import DataLayer

db = DataLayer()


def get_all() -> list[dict]:
    return db.get_all()


def get_one(linkId: str) -> dict:
    return db.get_by_key(linkId)


def create_one(data: dict) -> dict:
    return db.put(dict(data))


def put_many(data: list[dict]) -> dict:
    return db.put_many(data)


def update(data: dict) -> dict:
    return db.update(data)


def delete(key: str) -> dict:
    return db.delete(key)
