import { useEffect, useState } from 'react';
import { NewsItems } from './NewsMobile/HelperNewsMobile/NewsItemMobile';
import FooterMobile from './FooterMobile/FooterMobile';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import { Route, Routes } from 'react-router-dom';
import NewsMobile from './NewsMobile/NewsMobile';
import TourismMobile from './TourismMobile/TourismMobile';
import ReportProblemMobile from './ReportProblemMobile/ReportProblemMobile';
import SearchBar from './SearchBar/SearchBar';

const MobileUI = () => {
  const [, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<NewsItems[]>([]);
  const [newsItems, setNewsItems] = useState<NewsItems[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filteredResults = newsItems.filter((news: NewsItems) =>
      news.title.toLowerCase().includes(query)
    );
    setSearchResults(filteredResults);
  };

  useEffect(() => {
    fetch('https://api.mojnovipazar.info/news/')
      .then(response => response.json())
      .then(data => {
        setNewsItems(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <HeaderMobile />
      <Routes>
        <Route
          path="/"
          element={<NewsMobile searchResults={searchResults} />}
        />
        <Route path="/tourism" element={<TourismMobile />} />
        <Route path="/report-a-problem" element={<ReportProblemMobile />} />
      </Routes>
      <FooterMobile />
    </>
  );
};

export default MobileUI;
