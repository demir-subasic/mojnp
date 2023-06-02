import './HelperNews.css';
import { AiOutlineCalendar } from 'react-icons/ai';
import { NewsItem } from './NewsItem';

interface MainNewsProps {
  selectedNews: NewsItem;
}

const MainNews: React.FC<MainNewsProps> = ({ selectedNews }) => {
  const { title, image, date, content } = selectedNews;

  return (
    <div className="News-Main">
      <div
        className="News-Main__Container"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="News-Main__title">
          <h2>{title}</h2>
          <p>
            <AiOutlineCalendar />
            {date}
          </p>
        </div>
      </div>
      <p className='paragraph'>{content}</p>
    </div>
  );
};

export default MainNews;
