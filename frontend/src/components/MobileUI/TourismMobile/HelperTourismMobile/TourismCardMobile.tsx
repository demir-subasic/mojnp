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
        style={{ backgroundImage: `url(${cards.image})` }}
        onClick={handleClick}
      >
        <h3>{cards.content}</h3>
      </div>
    </Link>
  );
};

export default TourismCardMobile;
