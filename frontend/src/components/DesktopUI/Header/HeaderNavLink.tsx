import './Header.css';
import { NavLink } from 'react-router-dom';

interface HeaderLink {
  link: string;
  textContent: string;
}

const HeaderNavLink: React.FC<HeaderLink> = ({ link, textContent }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => {
        return isActive ? 'active' : '';
      }}
    >
      {textContent}
    </NavLink>
  );
};

export default HeaderNavLink;
