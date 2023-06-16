import './News.scss';
import MainNews from './HelperNews/MainNews';
import SecondaryNews from './HelperNews/SecondaryNews';
import { useEffect, useState } from 'react';
import { NewsItems } from './HelperNews/NewsItem';

const News = () => {
  const [newsItems, setNewsItems] = useState<NewsItems[]>([]);
  const [selectedNews, setSelectedNews] = useState<NewsItems | null>(null);

  const handleNewsItemClick = (news: NewsItems) => {
    setSelectedNews(news);
  };

  useEffect(() => {
    fetch('https://mojnp.onrender.com/news/')
      .then(response => response.json())
      .then(data => setNewsItems(data))
      .catch(error => console.log(error));
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
