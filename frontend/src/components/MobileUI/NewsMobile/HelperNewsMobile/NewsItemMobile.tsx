import { Link } from 'react-router-dom';
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
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  return (
    <Link to={`/${news.linkId}`} className='News-Item-Mobile__content' >
      <div className="News-Item-Mobile">
        <img src={news.image} alt="" />
        <h4>{news.title}</h4>
        <div className="News-Item-Mobile__date">
          <p>
            <AiOutlineCalendar />
            {news.published}
          </p>
        </div>
        <p className="summary">{news.summary.slice(0, 150)}...</p>
        <p
          style={{
            marginBottom: '0',
            fontSize: '14px',
            color: 'gray',
            borderBottom: '1px solid lightgray',
          }}
        >
          Preuzeto: {news.author}
        </p>
      </div>
    </Link>
  );
};

export default NewsItem;
