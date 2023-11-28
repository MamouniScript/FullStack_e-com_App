// NavBarLink.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLink = ({ to, children }) => (
  <li>
    <NavLink className="nav-link" to={to}>
      {children}
    </NavLink>
  </li>
);

export default NavBarLink;
