from app.report.logic import repo_logic


def create_report(data: dict) -> str:
    return repo_logic.create_report(data)
