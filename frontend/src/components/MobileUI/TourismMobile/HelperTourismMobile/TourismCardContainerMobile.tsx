import '../TourismMobile.scss';
import TourismCardMobile, { TourismCards } from './TourismCardMobile';

interface TourismCardContainerProps {
  cards: TourismCards[];
  onCardClick: (cards: TourismCards) => void;
  cardRefs: React.MutableRefObject<any[]>;
}

const TourismCardContainerMobile: React.FC<TourismCardContainerProps> = ({
  cards,
  onCardClick,
  cardRefs,
}) => {
  const handleCardClick = (cards: TourismCards) => {
    onCardClick(cards);
  };
  return (
    <div className="TourismMobile__card-container">
      {cards.map(card => (
        <TourismCardMobile
          cardRefs={cardRefs}
          key={card.id}
          cards={card}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default TourismCardContainerMobile;
