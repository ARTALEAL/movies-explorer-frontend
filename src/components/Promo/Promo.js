import React from 'react';
import './Promo.css';
import Header from '../Header/Header';

const Promo = ({ loggedIn }) => {
  return (
    <section className="promo">
      <Header loggedIn={loggedIn} />
    </section>
  );
};

export default Promo;
