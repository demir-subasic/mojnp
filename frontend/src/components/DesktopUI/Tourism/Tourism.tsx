import './Tourism.scss';
import TourismCardContainer from './HelperTourism/TourismCardContainer';

export const dummyData = [
  {
    id: 'islamski-spomenici1',
    content: 'Lorem ipsum dolor sit amet 1',
    image: 'https://picsum.photos/203',
  },
  {
    id: 'hriscanski-spomenici2',
    content: 'Lorem ipsum dolor sit amet 2',
    image: 'https://picsum.photos/198',
  },
  {
    id: 'sruseni-spomenici3',
    content: 'Lorem ipsum dolor sit amet 3',
    image: 'https://picsum.photos/199',
  },
  {
    id: 'restorani4',
    content: 'Lorem ipsum dolor sit amet 4',
    image: 'https://picsum.photos/200',
  },
  {
    id: 'hoteli5',
    content: 'Lorem ipsum dolor sit amet 5',
    image: 'https://picsum.photos/202',
  },
  {
    id: '6',
    content: 'Lorem ipsum dolor sit amet 6',
    image: 'https://picsum.photos/201',
  },
];

const Tourism = () => {
  const handleCardClick = (card: any) => {
    console.log(card);
  };

  return (
    <div className="Tourism">
      <div className="Tourism__image-container">
        <h2>Upoznajte Nas Grad</h2>
        <h3>Upoznajte Nas Grad</h3>
      </div>
      <TourismCardContainer cards={dummyData} onCardClick={handleCardClick} />
    </div>
  );
};

export default Tourism;
