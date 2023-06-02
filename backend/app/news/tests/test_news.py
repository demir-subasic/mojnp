from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_read_root():
    response = client.get("/news/")
    assert response.status_code == 200


def test_create_url():
    response = client.post("/news/add")
    assert response.status_code == 201
