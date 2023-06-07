import './HelperNewsMobile.css';
import { AiOutlineCalendar } from 'react-icons/ai';
import { NewsItems } from './NewsItemMobile';
import { useParams } from 'react-router-dom';

interface MainNewsProps {
  news: NewsItems[];
}

const MainNewsMobile: React.FC<MainNewsProps> = ({ news }) => {
  const { linkId } = useParams<{ linkId: string }>();
  const selectedNews = news.find(item => item.linkId.split('?')[0] === linkId);

  if (!selectedNews) {
    return <div>Ucitavanje vesti u toku...</div>;
  }

  return (
    <div className="News-Main-Mobile">
      <img src={selectedNews.image} alt="" />
      <div className="News-Main-Mobile__title">
        <h2>{selectedNews.title}</h2>
        <p>
          <AiOutlineCalendar />
          {selectedNews.published}
        </p>
      </div>
      <p className="paragraph-mobile">{selectedNews.content}</p>
      <p style={{ marginBottom: '0', color: 'gray' }}>
        Preuzeto: {selectedNews.author}
      </p>
    </div>
  );
};

export default MainNewsMobile;
