from app.tourism.logic import tourism_logic


def get_all():
    return tourism_logic.get_all()


def create_one(data: dict):
    return tourism_logic.create_one(data)
