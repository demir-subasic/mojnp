import './Header.css';
import HeaderNavLink from './HeaderNavLink';

const Header = () => {
  return (
    <header className="Header-Desktop">
      <div>
        <h1>
          Moj<span>NP</span>
        </h1>
      </div>
      <nav>
        <HeaderNavLink link="/" textContent="Vesti" />
        <HeaderNavLink link="/tourism" textContent="Turizam" />
        <HeaderNavLink link="/report-a-problem" textContent="Prijavi Problem" />
      </nav>
      <div>
        <button>Sign in</button>
      </div>
    </header>
  );
};

export default Header;
