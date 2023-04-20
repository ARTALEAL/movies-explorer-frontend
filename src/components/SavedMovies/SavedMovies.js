import React from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

const savedMovies = [
  {
    id: 1,
    name: '33 слова о дизайне',
    image: 'images/1film.jpg',
    duration: '1ч 17м',
    saved: true,
  },
  {
    id: 2,
    name: 'Киноальманах «100 лет дизайна»',
    image: 'images/2film.png',
    duration: '1ч 17м',
    saved: true,
  },
  {
    id: 3,
    name: 'В погоне за Бенкси',
    image: 'images/3film.png',
    duration: '1ч 17м',
    saved: true,
  },
];

const SavedMovies = ({ loggedIn }) => {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm />
        <MoviesCardList isSavedMoviesPage={true} movies={savedMovies} />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
