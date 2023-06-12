import '../TourismMobile.scss';
import TourismCardMobile, { TourismCards } from './TourismCardMobile';

interface TourismCardContainerProps {
  cards: TourismCards[];
  onCardClick: (cards: TourismCards) => void;
}

const TourismCardContainerMobile: React.FC<TourismCardContainerProps> = ({
  cards,
  onCardClick,
}) => {
  const handleCardClick = (cards: TourismCards) => {
    onCardClick(cards);
  };
  return (
    <div className="TourismMobile__card-container">
      {cards.map(card => (
        <TourismCardMobile key={card.id} cards={card} onClick={handleCardClick} />
      ))}
    </div>
  );
};

export default TourismCardContainerMobile;
