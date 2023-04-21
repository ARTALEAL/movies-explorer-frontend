import React, { useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';

const Profile = ({ loggedIn, onSignOut }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <section>
      <Header loggedIn={loggedIn} />
      <div className="profile__container">
        <h1 className="profile__title">Привет, Артём!</h1>
        <form className="profile__form">
          <div className="profile__value">
            <label className="profile__label">Имя</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="profile__input"
              required
              placeholder="Имя"
            />
          </div>
          <div className="profile__line"></div>
          <div className="profile__value">
            <label className="profile__label">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="profile__input"
              required
              placeholder="pochta@yandex.ru"
            />
          </div>
        </form>
        <div className="profile__control">
          <button className="profile__edit">Редактировать</button>
          <button className="profile__logout" onClick={() => onSignOut()}>
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
