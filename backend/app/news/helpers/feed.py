import re

import feedparser
from app.news.data_access.news import DataLayer

db = DataLayer()


def _extract_image_from_content(item):
    content_split = str(item["content"][0].value).split()
    list_of_images = [
        content_split[x][5:-1]
        for x in range(len(content_split))
        if ".jpg" in content_split[x] and "logo-iz-bijeli" not in content_split[x][0]
    ]
    return list_of_images


def _parse_item(item, url, image):
    return {
        "title": item.title,
        "link": item.link,
        "summary": re.sub(r"<[^>]*>", "", item.description),
        "published": item.published[5:16],
        "author": url.split("/")[2],
        "content": re.sub(r"<[^>]*>", "", item.content[0].value),
        "image": image,
        "linkId": "-".join(str(item.link).split("/")[-2:]),
    }


def extract_feed(url: str):
    feed = feedparser.parse(url)
    data = []

    for x in feed.entries:
        list_of_images = _extract_image_from_content(x)
        if len(list_of_images) > 0 and len(list_of_images[0]) > 0:
            item = _parse_item(x, url, list_of_images[0])
            data.append(item)
        pass
    return data


def write_to_db(urls: list):
    db.clear()
    for url in urls:
        db.put_many(extract_feed(url))
