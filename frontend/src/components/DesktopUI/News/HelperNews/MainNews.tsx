import './HelperNews.scss';
import { AiOutlineCalendar } from 'react-icons/ai';
import { NewsItems } from './NewsItem';
import { useEffect, useRef } from 'react';

interface MainNewsProps {
  selectedNews: NewsItems;
}

const MainNews: React.FC<MainNewsProps> = ({ selectedNews }) => {
  const { title, image, published, content, author } = selectedNews;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedNews && containerRef.current) {
      const mainNewsElement = containerRef.current;
      const parentContainer = mainNewsElement.parentNode as HTMLDivElement;
      const scrollTo = mainNewsElement.offsetTop - parentContainer.offsetTop;
      parentContainer.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      });
    }
  }, [selectedNews]);

  return (
    <div className="News-Main" ref={containerRef}>
      <div
        className="News-Main__Image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="News-Main__title">
        <h2>{title}</h2>
        <p>
          <AiOutlineCalendar />
          {published}
        </p>
      </div>
      <p className="paragraph">{content}</p>
      <p style={{ marginBottom: '0', color: 'gray' }}>Preuzeto: {author}</p>
    </div>
  );
};

export default MainNews;
