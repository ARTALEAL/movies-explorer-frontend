import React from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

const SavedMovies = ({ loggedIn }) => {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm />
        <MoviesCardList isSavedMoviesPage={true} />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
