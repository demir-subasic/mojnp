import httpx


def create_report(data: dict) -> str:
    httpx.post(
        "http://prijavakomunalnihproblema.novipazar.rs/php/smartprocess.php",
        data={
            "sendername": data["name"],
            "emailaddress": data["email"],
            "telefon": data["phone"],
            "adresa": data["address"],
            "orderfiles": data["files"],
            "lokacija": data["location"],
            "oblast": data["field"],
            "poruka": data["description"],
            "captcha": "true",
        },
    )
    return "Report created"
