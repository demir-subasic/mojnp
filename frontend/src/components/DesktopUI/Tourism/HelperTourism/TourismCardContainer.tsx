import '../Tourism.scss';
import TourismCard, { TourismCards } from './TourismCard';

interface TourismCardContainerProps {
  cards: TourismCards[];
  onCardClick: (cards: TourismCards) => void;
}

const TourismCardContainer: React.FC<TourismCardContainerProps> = ({
  cards,
  onCardClick,
}) => {
  const handleCardClick = (cards: TourismCards) => {
    onCardClick(cards);
  };
  return (
    <div className="Tourism__card-container">
      {cards.map(card => (
        <TourismCard key={card.id} cards={card} onClick={handleCardClick} />
      ))}
    </div>
  );
};

export default TourismCardContainer;
