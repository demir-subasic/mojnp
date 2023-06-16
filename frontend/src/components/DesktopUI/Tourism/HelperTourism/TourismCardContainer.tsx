import '../Tourism.scss';
import TourismCard, { TourismCards } from './TourismCard';

interface TourismCardContainerProps {
  cards: TourismCards[];
  onCardClick: (cards: TourismCards) => void;
  cardRefs: React.MutableRefObject<any[]>;
}

const TourismCardContainer: React.FC<TourismCardContainerProps> = ({
  cards,
  onCardClick,
  cardRefs,
}) => {
  const handleCardClick = (cards: TourismCards) => {
    onCardClick(cards);
  };
  return (
    <div className="Tourism__card-container">
      {cards.map(card => (
        <TourismCard
          cardRefs={cardRefs}
          key={card.id}
          cards={card}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default TourismCardContainer;
