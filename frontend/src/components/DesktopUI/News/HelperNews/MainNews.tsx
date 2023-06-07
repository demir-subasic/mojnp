import './HelperNews.css';
import { AiOutlineCalendar } from 'react-icons/ai';
import { NewsItems } from './NewsItem';

interface MainNewsProps {
  selectedNews: NewsItems;
}

const MainNews: React.FC<MainNewsProps> = ({ selectedNews }) => {
  const { title, image, published, content, author } = selectedNews;

  return (
    <div className="News-Main">
      <div
        className="News-Main__Image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="News-Main__title">
          <h2>{title}</h2>
          <p>
            <AiOutlineCalendar />
            {published}
          </p>
        </div>
      </div>
      <p className="paragraph">{content}</p>
      <p style={{marginBottom: '0', color: 'gray'}}>Preuzeto: {author}</p>
    </div>
  );
};

export default MainNews;
