import './Tourism.scss';
import TourismCardContainer from './HelperTourism/TourismCardContainer';
import TourismAnimation from './HelperTourism/TourismAnimation';

export const dummyData = [
  {
    id: 'islamski-spomenici1',
    content: 'Islamski Spomenici',
    image: 'https://picsum.photos/203',
  },
  {
    id: 'hriscanski-spomenici2',
    content: 'Hriscanski Spomenici',
    image: 'https://picsum.photos/198',
  },
  {
    id: 'sruseni-spomenici3',
    content: 'Sruseni Spomenici',
    image: 'https://picsum.photos/199',
  },
  {
    id: 'restorani4',
    content: 'Restorani',
    image: 'https://picsum.photos/200',
  },
  {
    id: 'hoteli5',
    content: 'Hoteli',
    image: 'https://picsum.photos/202',
  },
  {
    id: 'mapa6',
    content: 'Mape',
    image: 'https://picsum.photos/201',
  },
];

const Tourism = () => {
  const handleCardClick = (card: any) => {
    console.log(card);
  };

  return (
    <div className="Tourism">
      <TourismAnimation />
      <div className="Tourism__title">
        <h1>Vas vodic za gradski odmor u Novom Pazaru</h1>
        <span>Mali grad velike duse</span>
      </div>
      <TourismCardContainer cards={dummyData} onCardClick={handleCardClick} />
    </div>
  );
};

export default Tourism;
