import React from 'react';
import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ loggedIn }) => {
  const location = useLocation();
  return (
    <nav className="navigation">
      {loggedIn ? (
        <>
          <div className="navigation__movies">
            <Link
              to="/movies"
              className={
                location.pathname === '/movies'
                  ? 'navigation__movies-link_active'
                  : 'navigation__movies-link'
              }
            >
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              className={
                location.pathname === '/saved-movies'
                  ? 'navigation__movies-link_active'
                  : 'navigation__movies-link'
              }
            >
              Сохраненные фильмы
            </Link>
          </div>
          <div>
            <Link to="/profile">
              <button className="navigation__button_account">Аккаунт</button>
            </Link>
          </div>
        </>
      ) : (
        <div className="navigation__auth">
          <Link to="/signup" className="navigation__link">
            Регистрация
          </Link>
          <Link to="/signin">
            <button className="navigation__button">Войти</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
