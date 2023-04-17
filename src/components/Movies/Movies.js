import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({ loggedIn }) => {
  return (
    <section>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </section>
  );
};

export default Movies;
