import React, { useState } from 'react';
import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Navigation = ({ loggedIn }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const location = useLocation();
  const toggleBurgerMenuOpen = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };
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
      {loggedIn && !isBurgerMenuOpen ? (
        <button
          className="navigation__burger-btn"
          onClick={toggleBurgerMenuOpen}
        />
      ) : (
        <BurgerMenu onClose={toggleBurgerMenuOpen} loggedIn={loggedIn} />
      )}
    </nav>
  );
};

export default Navigation;
