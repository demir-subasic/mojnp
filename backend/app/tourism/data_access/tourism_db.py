from app.database.db import connect_to_db

db = connect_to_db("tourism")


class DataLayer:
    @staticmethod
    def get_all():
        return db.fetch().items

    def put(self, data: dict):
        return db.put(data, key=data["name"])

    def put_many(self, data: list[dict]):
        for x in data:
            db.put(x, key=x["link"])
        return "done"

    def update(self, data: dict):
        return db.update(data, key=data["link"])

    def get_by_key(self, linkId: str):
        for x in db.fetch().items:
            if x["linkId"] == linkId:
                return x

    def delete(self, key: str):
        return db.delete(key)

    def clear(self):
        for x in db.fetch().items:
            db.delete(x["key"])
