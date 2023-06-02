from app.news.data_access.news import DataLayer

db = DataLayer()


def get_all() -> list[dict]:
    return db.get_all()


def get_one(linkId: str) -> dict:
    return db.get_by_key(linkId)


def put(data: dict) -> dict:
    return db.put(data)


def put_many(data: list[dict]) -> dict:
    return db.put_many(data)


def update(data: dict) -> dict:
    return db.update(data)


def delete(key: str) -> dict:
    return db.delete(key)


def clear() -> dict:
    return db.clear()
