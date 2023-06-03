import './HelperNews.css';
import { AiOutlineCalendar } from 'react-icons/ai';

export interface NewsItems {
  linkId: string;
  title: string;
  published: string;
  content: string;
  image: string;
}

interface NewsItemProps {
  news: NewsItems;
  active: boolean;
  onClick: (news: NewsItems) => void;
}

const NewsItem: React.FC<NewsItemProps> = ({ news, active, onClick }) => {
  const handleClick = () => {
    onClick(news);
  };

  return (
    <div
      className={`News-Item${active ? ' active' : ''}`}
      onClick={handleClick}
      style={{ backgroundImage: `url(${news.image})` }}
    >
      <h4>{news.title}</h4>
      <div className="News-Item__date">
        <p>
          {' '}
          <AiOutlineCalendar />
          {news.published}
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
