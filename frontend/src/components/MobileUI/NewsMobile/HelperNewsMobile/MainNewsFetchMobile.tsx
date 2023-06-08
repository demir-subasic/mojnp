import { useEffect, useState } from 'react';
import MainNewsMobile from './MainNewsMobile';
import { NewsItems } from './NewsItemMobile';

const MainNewsFetchMobile = () => {
  const [newsItems, setNewsItems] = useState<NewsItems[]>([]);

  useEffect(() => {
    fetch('https://api.mojnovipazar.info/news/')
      .then(response => response.json())
      .then(data => setNewsItems(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <MainNewsMobile news={newsItems} />
    </>
  );
};

export default MainNewsFetchMobile;
