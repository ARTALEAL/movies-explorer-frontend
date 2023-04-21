import React from 'react';
import './Promo.css';
import Header from '../Header/Header';
import MoreButton from '../MoreButton/MoreButton';

const Promo = ({ loggedIn }) => {
  return (
    <section className="promo">
      <Header loggedIn={loggedIn} />
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="promo__caption">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <MoreButton />
      </div>
    </section>
  );
};

export default Promo;
