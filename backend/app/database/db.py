from deta import Deta, _Base


def connect_to_db(db_name) -> _Base:
    deta = Deta("a08oz0mp_muR9UbGnHCPbF98C9vGQhpPYDiX5hr2Q")
    return deta.Base(db_name)
