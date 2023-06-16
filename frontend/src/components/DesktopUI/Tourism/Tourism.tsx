import './Tourism.scss';
import TourismCardContainer from './HelperTourism/TourismCardContainer';
import TourismAnimation from './HelperTourism/TourismAnimation';
import { useEffect, useRef, useState } from 'react';

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

const Tourism = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<any[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleScroll = () => {
    const titleElement = titleRef.current;

    if (titleElement && !hasAnimated) {
      const titleRect = titleElement.getBoundingClientRect();
      const titleTop = titleRect.top;
      const titleBottom = titleRect.bottom;

      if (titleTop < window.innerHeight && titleBottom >= 0) {
        titleElement.classList.add('fade-in-from-bottom');
        setHasAnimated(true);
      }
    }

    const cardElements = cardsRef.current;

    cardElements.forEach(cardElement => {
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
  }, []);

  const handleCardClick = (card: any) => {
    console.log(card);
  };

  return (
    <div className="Tourism">
      <div className="Tourism__animation">
        <TourismAnimation />
      </div>
      <div
        className={`Tourism__title ${hasAnimated ? 'fade-in-from-bottom' : ''}`}
        ref={titleRef}
      >
        <h1>Vas vodic za gradski odmor u Novom Pazaru</h1>
        <span>
          Novi Pazar, živahan grad sa bogatom istorijom i zadivljujućom
          prirodom. Budite spremni da vas mami jedinstveni spoj drevnih kultura
          i pejzaža koji oduzimaju dah.
        </span>
      </div>
      <TourismCardContainer
        cards={dummyData}
        onCardClick={handleCardClick}
        cardRefs={cardsRef}
      />
    </div>
  );
};

export default Tourism;
