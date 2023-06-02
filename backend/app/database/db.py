from deta import Deta, _Base
import os


def connect_to_db(db_name) -> _Base:
    deta = Deta(os.environ["DETA_PROJECT_KEY"])
    return deta.Base(db_name)
