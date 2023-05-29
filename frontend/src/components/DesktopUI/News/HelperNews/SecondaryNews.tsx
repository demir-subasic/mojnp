import './HelperNews.css';
import { NewsItem } from './NewsItem';
import NewsItemComponent from './NewsItem';

interface SecondaryNewsProps {
  newsItems: NewsItem[];
  onNewsItemClick: (news: NewsItem) => void;
  selectedNews: NewsItem;
}

const SecondaryNews: React.FC<SecondaryNewsProps> = ({
  newsItems,
  onNewsItemClick,
  selectedNews,
}) => {
  const handleNewsItemClick = (news: NewsItem) => {
    onNewsItemClick(news);
  };

  return (
    <div className="Secondary-News__Container">
      {newsItems.map(news => (
        <NewsItemComponent
          key={news.id}
          news={news}
          active={selectedNews.id === news.id}
          onClick={handleNewsItemClick}
        />
      ))}
    </div>
  );
};

export default SecondaryNews;
