import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const movies = [
  {
    id: 1,
    name: '33 слова о дизайне',
    image: 'images/1film.jpg',
    duration: '1ч 17м',
    saved: false,
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
    saved: false,
  },
  {
    id: 4,
    name: 'Киноальманах «100 лет дизайна»',
    image: 'images/2film.png',
    duration: '1ч 17м',
    saved: false,
  },
  {
    id: 5,
    name: '33 слова о дизайне',
    image: 'images/1film.jpg',
    duration: '1ч 17м',
    saved: false,
  },
  {
    id: 3,
    name: 'В погоне за Бенкси',
    image: 'images/3film.png',
    duration: '1ч 17м',
    saved: false,
  },
];

const Movies = ({ loggedIn }) => {
  return (
    <section>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList isSavedMoviesPage={false} movies={movies} />
      <Footer />
    </section>
  );
};

export default Movies;
