import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBarLink from './NavBarLink'; 

export function AdminLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
           <li> <NavBarLink to="/products">Products</NavBarLink></li>
           <li> <NavBarLink to="/">Home</NavBarLink></li>
           <li> <NavBarLink to="/connexion">Connexion</NavBarLink></li>
           <li> <NavBarLink to="/contacts">Contacts</NavBarLink></li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
