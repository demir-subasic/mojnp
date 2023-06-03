import './News.css';
import MainNews from './HelperNews/MainNews';
import SecondaryNews from './HelperNews/SecondaryNews';
import { useEffect, useState } from 'react';
import { NewsItems } from './HelperNews/NewsItem';
import axios from 'axios';

const apiUrl: string = import.meta.env.VITE_NEWS_API;

console.log(apiUrl);

console.log(import.meta);


const News = () => {
  const [newsItems, setNewsItems] = useState<NewsItems[]>([]);
  const [selectedNews, setSelectedNews] = useState<NewsItems | null>(null);

  const handleNewsItemClick = (news: NewsItems) => {
    setSelectedNews(news);
  };

  const decodeHTML = (htmlString: string): string => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.documentElement.textContent || '';
  };

  const newsApi = async () => {
    try {
      const response = await axios.get(apiUrl);
      const decodedData = response.data.map((item: NewsItems) => ({
        ...item,
        title: decodeHTML(item.title),
        content: decodeHTML(item.content),
      }));
      setNewsItems(decodedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, []);

  useEffect(() => {
    if (newsItems.length > 0) {
      setSelectedNews(newsItems[0]);
    }
  }, [newsItems]);

  return (
    <div className="News">
      <div className="News-Main-News">
        {selectedNews && <MainNews selectedNews={selectedNews} />}
      </div>
      <div className="News-Secondary-News">
        <SecondaryNews
          newsItems={newsItems}
          onNewsItemClick={handleNewsItemClick}
          selectedNews={selectedNews}
        />
      </div>
    </div>
  );
};

export default News;
