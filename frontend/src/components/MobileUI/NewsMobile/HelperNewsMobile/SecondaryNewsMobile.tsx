import './HelperNewsMobile.css';
import NewsItemMobile, { NewsItems } from './NewsItemMobile';

interface SecondaryNewsProps {
  newsItems: NewsItems[];
}

const SecondaryNews: React.FC<SecondaryNewsProps> = ({ newsItems }) => {
  return (
    <div className="Secondary-News-Mobile__Container">
      {newsItems.map(news => (
        <NewsItemMobile key={news.linkId} news={news} />
      ))}
    </div>
  );
};

export default SecondaryNews;
