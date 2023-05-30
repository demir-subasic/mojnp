import './Header.css';
import HeaderNavLink from './HeaderNavLink';

const Header = () => {
  return (
    <header className='Header-Desktop'>
      <div>
        <img alt="" src="https://picsum.photos/200/200" />
        <h1>
          Moj<span>NP</span>
        </h1>
      </div>
      <nav>
        <HeaderNavLink link="/" textContent="Vesti" />
        <HeaderNavLink link="/tourism" textContent="Turizam" />
        <HeaderNavLink link="/report-a-problem" textContent="Prijavi Problem" />
      </nav>
    </header>
  );
};

export default Header;
