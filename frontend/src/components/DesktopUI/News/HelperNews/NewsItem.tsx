import './HelperNews.scss';

export interface NewsItems {
  linkId: string;
  title: string;
  published: string;
  content: string;
  image: string;
  author: string;
}

interface NewsItemProps {
  news: NewsItems;
  active: boolean;
  onClick: (news: NewsItems) => void;
}

const NewsItem: React.FC<NewsItemProps> = ({ news, active, onClick }) => {
  const handleClick = () => {
    onClick(news);
  };

  return (
    <div
      className={`News-Item${active ? ' active' : ''}`}
      onClick={handleClick}
    >
      <div className="image-container">
        <img src={news.image} alt={news.title} />
      </div>
      <div className="info">
        <h4>{news.title}</h4>
      </div>
    </div>
  );
};

export default NewsItem;
