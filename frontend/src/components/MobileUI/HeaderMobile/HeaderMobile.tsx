import './HeaderMobile.scss';
import { useState } from 'react';
import { RxHamburgerMenu, RxAvatar } from 'react-icons/rx';
import { VscChromeClose } from 'react-icons/vsc';
import HeaderMobileNavLink from './HeaderMobileNavLink';

const HeaderMobile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <header className="Header-Mobile">
      <RxAvatar />
      <nav
        className={`${isDropdownOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
      >
        {isDropdownOpen ? <VscChromeClose /> : <RxHamburgerMenu />}
        {isDropdownOpen && (
          <div>
            <HeaderMobileNavLink link="/" textContent="Vesti" />
            <HeaderMobileNavLink link="/tourism" textContent="Turizam" />
            <HeaderMobileNavLink
              link="/report-a-problem"
              textContent="Prijavi Problem"
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderMobile;
