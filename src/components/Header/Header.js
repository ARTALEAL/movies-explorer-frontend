import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Header.css';
import logo from '../../images/headerLogo.svg';

const Header = ({ loggedIn }) => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Логотип" className="header__logo" />
      </Link>
      <Navigate loggedIn={loggedIn} />
    </header>
  );
};

export default Header;
