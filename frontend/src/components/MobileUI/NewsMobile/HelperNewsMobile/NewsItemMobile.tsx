import './HelperNewsMobile.css';
import { AiOutlineCalendar } from 'react-icons/ai';

export interface NewsItems {
  linkId: string;
  title: string;
  published: string;
  content: string;
  summary: string;
  image: string;
  author: string;
}

interface NewsItemProps {
  news: NewsItems;
  onClick: (news: NewsItems) => void;
}

const NewsItem: React.FC<NewsItemProps> = ({ news, onClick }) => {
  const handleClick = () => {
    onClick(news);
  };

  return (
    <div className="News-Item-Mobile" onClick={handleClick}>
      <img src={news.image} alt="" />
      <h4>{news.title}</h4>
      <div className="News-Item-Mobile__date">
        <p>
          {' '}
          <AiOutlineCalendar />
          {news.published}
        </p>
      </div>
      <p className="summary">{news.summary.slice(0, 150)}...</p>
      <p style={{ marginBottom: '0', fontSize: '14px', color: 'gray' }}>
        Preuzeto: {news.author}
      </p>
    </div>
  );
};

export default NewsItem;
