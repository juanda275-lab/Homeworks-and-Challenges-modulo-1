import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavComponent.css'; // Asegúrate de crear este archivo para los estilos

const NavComponent = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active-link">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" activeClassName="active-link">
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
