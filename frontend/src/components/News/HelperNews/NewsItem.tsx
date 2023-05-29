import './HelperNews.css';
import { AiOutlineCalendar } from 'react-icons/ai';

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
}

interface NewsItemProps {
  news: NewsItem;
  active: boolean;
  onClick: (news: NewsItem) => void;
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
        <AiOutlineCalendar />
        <p>{news.date}</p>
      </div>
    </div>
  );
};

export default NewsItem;
