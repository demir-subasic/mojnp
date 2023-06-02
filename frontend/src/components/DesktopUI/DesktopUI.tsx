import Footer from './Footer/Footer';
import Header from './Header/Header';
import News from './News/News';
import { Routes, Route } from 'react-router-dom';

const DesktopUI = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<News />} />
      </Routes>
      <Footer />
    </>
  );
};

export default DesktopUI;
