import './HelperNewsMobile.css';
import NewsItemMobile, { NewsItems } from './NewsItemMobile';

interface SecondaryNewsProps {
  newsItems: NewsItems[];
  onNewsItemClick: (news: NewsItems) => void;
  selectedNews: NewsItems | null;
}

const SecondaryNews: React.FC<SecondaryNewsProps> = ({
  newsItems,
  onNewsItemClick,
}) => {
  const handleNewsItemClick = (news: NewsItems) => {
    onNewsItemClick(news);
  };

  return (
    <div className="Secondary-News-Mobile__Container">
      {newsItems.map(news => (
        <NewsItemMobile
          key={news.linkId}
          news={news}
          onClick={handleNewsItemClick}
        />
      ))}
    </div>
  );
};

export default SecondaryNews;
