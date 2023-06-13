import { Link } from 'react-router-dom';
import '../TourismMobile.scss';

export interface TourismCards {
  id: string;
  content: string;
  image: string;
}

interface TourismCardProps {
  cards: TourismCards;
  onClick: (cards: TourismCards) => void;
}

const TourismCardMobile: React.FC<TourismCardProps> = ({ cards, onClick }) => {
  const handleClick = () => {
    onClick(cards);
  };

  return (
    <Link to={cards.id}>
      <div
        className="TourismMobile__card"
        style={{
          backgroundImage: `linear-gradient(to bottom,
             rgba(0,0,0,0.01),
             rgba(0,0,0,0.1),
             rgba(0,0,0,0.8)),url(${cards.image})`,
        }}
        onClick={handleClick}
      ></div>
      <h3>{cards.content}</h3>
    </Link>
  );
};

export default TourismCardMobile;
