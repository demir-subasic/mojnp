import './NewsMobile.css';
import { useEffect, useState } from 'react';
import SecondaryNewsMobile from './HelperNewsMobile/SecondaryNewsMobile';
import { NewsItems } from './HelperNewsMobile/NewsItemMobile';
import SearchBar from '../SearchBar/SearchBar';

const NewsMobile = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [newsItems, setNewsItems] = useState<NewsItems[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredNewsItems = newsItems.filter((news: NewsItems) =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetch('https://api.mojnovipazar.info/news/')
      .then(response => response.json())
      .then(data => setNewsItems(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="News-Secondary-Mobile">
      <SearchBar onSearch={handleSearch} />
      <SecondaryNewsMobile newsItems={filteredNewsItems} />
    </div>
  );
};

export default NewsMobile;
