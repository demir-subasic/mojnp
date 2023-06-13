import './Header.scss';
import HeaderNavLink from './HeaderNavLink';
import Logo from '../../../Images/np-logo-wo-border.png';

const Header = () => {
  return (
    <header className="Header-Desktop">
      <div>
        <img src={Logo} alt="" height="140px" width="150px" />
      </div>
      <nav>
        <HeaderNavLink link="/" textContent="Vesti" />
        <HeaderNavLink link="/tourism" textContent="Turizam" />
        <HeaderNavLink link="/report-a-problem" textContent="Prijavi Problem" />
      </nav>
      <div className="buttons">
        <div className="buttons-container">
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
