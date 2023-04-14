import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = ({ loggedIn }) => {
  return (
    <nav className="navigation">
      <div className="navigation__auth">
        <Link to="/signup" className="navigation__link">
          Регистрация
        </Link>
        <Link to="/signin">
          <button className="navigation__button">Войти</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
