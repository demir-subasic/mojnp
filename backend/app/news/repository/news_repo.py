from app.news.logic import news_logic


def get_all() -> list[dict]:
    return news_logic.get_all()


def get_one(linkId: str) -> dict:
    return news_logic.get_one(linkId)


def put(data: dict) -> dict:
    return news_logic.put(data)


def put_many(data: list[dict]) -> dict:
    return news_logic.put_many(data)


def update(data: dict) -> dict:
    return news_logic.update(data)


def delete(key: str) -> dict:
    return news_logic.delete(key)


def clear() -> dict:
    return news_logic.clear()
