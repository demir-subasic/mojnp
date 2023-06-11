import Footer from './Footer/Footer';
import Header from './Header/Header';
import News from './News/News';
import { Routes, Route } from 'react-router-dom';
import Tourism, { dummyData } from './Tourism/Tourism';
import ReportProblem from './ReportProblem/ReportProblem';
import NoPage from '../NoPage/NoPage';
import TourismSection from './Tourism/HelperTourism/TourismSection';

const DesktopUI = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route
          path="/tourism/:id"
          element={<TourismSection cards={dummyData} />}
        />
        <Route path="/report-a-problem" element={<ReportProblem />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default DesktopUI;
