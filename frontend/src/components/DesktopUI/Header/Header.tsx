import './Header.scss';
import HeaderNavLink from './HeaderNavLink';

const Header = () => {
  return (
    <header className="Header-Desktop">
      <div>
        <h1>
          MojNP<span>.</span>
        </h1>
      </div>
      <nav>
        <HeaderNavLink link="/" textContent="News" />
        <HeaderNavLink link="/tourism" textContent="Tourism" />
        <HeaderNavLink link="/report-a-problem" textContent="Alert" />
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
