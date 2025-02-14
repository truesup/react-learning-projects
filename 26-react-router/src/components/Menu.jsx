import { NavLink } from 'react-router-dom';

const Menu = () => {
  const toggleActive = ({ isActive }) => (isActive ? 'activeLink' : 'link');

  return (
    <nav>
      <NavLink className={toggleActive} to="." end>
        Home
      </NavLink>
      <NavLink className={toggleActive} to="about">
        About
      </NavLink>
      <NavLink className={toggleActive} to="contacts">
        Contacts
      </NavLink>
    </nav>
  );
};

export default Menu;
