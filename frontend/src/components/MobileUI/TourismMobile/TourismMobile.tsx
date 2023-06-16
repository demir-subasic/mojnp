import { useEffect, useRef, useState } from 'react';
import './TourismMobile.scss';
import TourismCardContainerMobile from './HelperTourismMobile/TourismCardContainerMobile';
import TourismAnimationMobile from './HelperTourismMobile/TourismAnimationMobile';

export const dummyData = [
  {
    id: 'islamski-spomenici1',
    title: 'Islamski Spomenici',
    isAnimated: false,
  },
  {
    id: 'hriscanski-spomenici2',
    title: 'Hriscanski Spomenici',
    isAnimated: false,
  },
  {
    id: 'sruseni-spomenici3',
    title: 'Sruseni Spomenici',
    isAnimated: false,
  },
  {
    id: 'restorani4',
    title: 'Restorani',
    isAnimated: false,
  },
  {
    id: 'hoteli5',
    title: 'Hoteli',
    isAnimated: false,
  },
  {
    id: 'mapa6',
    title: 'Mape',
    isAnimated: false,
  },
];

const TourismMobile = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<any[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  setTimeout(() => {
    titleRef.current?.classList.add('fade-in-from-bottom');
    setHasAnimated(true);
  }, 2000);

  const handleScroll = () => {
    const cardElements = cardsRef.current;

    cardElements.forEach((cardElement: any) => {
      if (cardElement && !cardElement.isAnimated) {
        const cardRect = cardElement.getBoundingClientRect();
        const cardTop = cardRect.top;
        const cardBottom = cardRect.bottom;

        if (cardTop < window.innerHeight && cardBottom >= 0) {
          cardElement.classList.add('fade-in-from-bottom');
          cardElement.isAnimated = true;
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]);

  const handleCardClick = (card: any) => {
    console.log(card);
  };

  return (
    <div className="TourismMobile">
      <TourismAnimationMobile />
      <div
        className={`TourismMobile__title ${
          hasAnimated ? 'fade-in-from-bottom' : ''
        }`}
        ref={titleRef}
      >
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
        cardRefs={cardsRef}
      />
    </div>
  );
};

export default TourismMobile;
