import '../TourismMobile.scss';
import { useParams } from 'react-router-dom';
import { TourismCards } from './TourismCardMobile';

interface TourismSectionProps {
  cards: TourismCards[];
}

const TourismSectionMobile: React.FC<TourismSectionProps> = ({ cards }) => {
  const { id } = useParams<{ id: string }>();
  const renderItem = cards.find(card => card.id.split('?')[0] === id);

  return (
    <div className="TourismMobile-Section">
      <img src={renderItem?.image} alt="" />
      <p>{renderItem?.title}</p>
    </div>
  );
};

export default TourismSectionMobile;
