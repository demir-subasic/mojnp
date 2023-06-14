import './TourismMobile.scss';
import TourismCardContainerMobile from './HelperTourismMobile/TourismCardContainerMobile';
import TourismAnimationMobile from './HelperTourismMobile/TourismAnimationMobile';

export const dummyData = [
  {
    id: 'islamski-spomenici1',
    title: 'Islamski Spomenici',
    image: 'https://picsum.photos/203',
  },
  {
    id: 'hriscanski-spomenici2',
    title: 'Hriscanski Spomenici',
    image: 'https://picsum.photos/198',
  },
  {
    id: 'sruseni-spomenici3',
    title: 'Sruseni Spomenici',
    image: 'https://picsum.photos/199',
  },
  {
    id: 'restorani4',
    title: 'Restorani',
    image: 'https://picsum.photos/200',
  },
  {
    id: 'hoteli5',
    title: 'Hoteli',
    image: 'https://picsum.photos/202',
  },
  {
    id: 'mapa6',
    title: 'Mape',
    image: 'https://picsum.photos/201',
  },
];

const TourismMobile = () => {
  const handleCardClick = (card: any) => {
    console.log(card);
  };

  return (
    <div className="TourismMobile">
      <TourismAnimationMobile />
      <div className="TourismMobile__title">
        <h1>Vas vodic za gradski odmor u Novom Pazaru</h1>
        <span>
          Novi Pazar, živahan grad sa bogatom istorijom i zadivljujućom
          prirodom. Budite spremni da vas mami jedinstveni spoj drevnih kultura
          i pejzaža koji oduzimaju dah.
        </span>
      </div>
      <TourismCardContainerMobile
        cards={dummyData}
        onCardClick={handleCardClick}
      />
    </div>
  );
};

export default TourismMobile;
