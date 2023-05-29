import './App.css';
import Footer from './components/DesktopUI/Footer/Footer';
import Header from './components/DesktopUI/Header/Header';
import News from './components/DesktopUI/News/News';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<News />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
