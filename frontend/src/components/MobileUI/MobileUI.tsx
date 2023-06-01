import FooterMobile from './FooterMobile/FooterMobile';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import { Route, Routes } from 'react-router-dom';
import NewsMobile from './NewsMobile/NewsMobile';

const MobileUI = () => {
  return (
    <>
      <HeaderMobile />
      <Routes>
        <Route path="/" element={<NewsMobile />} />
      </Routes>
      <FooterMobile />
    </>
  );
};

export default MobileUI;
