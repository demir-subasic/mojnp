import Footer from './Footer/Footer';
import Header from './Header/Header';
import News from './News/News';
import { Routes, Route } from 'react-router-dom';
import Tourism from './Tourism/Tourism';
import ReportProblem from './ReportProblem/ReportProblem';

const DesktopUI = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/report-a-problem" element={<ReportProblem />} />
      </Routes>
      <Footer />
    </>
  );
};

export default DesktopUI;
