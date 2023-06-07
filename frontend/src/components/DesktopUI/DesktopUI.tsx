import Footer from './Footer/Footer';
import Header from './Header/Header';
import News from './News/News';
import { Routes, Route } from 'react-router-dom';
import Tourism from './Tourism/Tourism';
import ReportProblem from './ReportProblem/ReportProblem';
import NoPage from '../NoPage/NoPage';

const DesktopUI = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/report-a-problem" element={<ReportProblem />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default DesktopUI;
