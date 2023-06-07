import './App.css';
import { useViewportSize } from '@mantine/hooks';
import DesktopUI from './components/DesktopUI/DesktopUI';
import MobileUI from './components/MobileUI/MobileUI';
import { useEffect, useState } from 'react';

function App() {
  const { width } = useViewportSize();
  const [, setNewsItems] = useState([]);

  useEffect(() => {
    fetch('https://api.mojnovipazar.info/news/')
      .then(response => response.json())
      .then(data => setNewsItems(data))
      .catch(error => console.log(error));
  }, []);

  return <>{width <= 768 ? <MobileUI /> : <DesktopUI />}</>;
}

export default App;
