import React, { useState } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies, filterShorts } from '../../utils/utils';
import Preloader from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';
import moviesApi from '../../utils/MoviesApi';

const Movies = ({ loggedIn, onLoading, isLoading, savedMovies, onSave }) => {
  const [shortMovies, setShortMovies] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isAllMovies, setIsAllMovies] = useState([]);
  const location = useLocation();

  const handleSetFilteredMovies = (movies, userQuery, shortMoviesCheckbox) => {
    const moviesList = filterMovies(movies, userQuery, false);
    if (moviesList.length === 0) {
      setNotFound(true);
      console.log('Ничего не найдено!');
    } else {
      setNotFound(false);
    }
    setInitialMovies(moviesList);
    setFilteredMovies(
      shortMoviesCheckbox ? filterShorts(moviesList) : moviesList
    );
    localStorage.setItem('movies', JSON.stringify(moviesList));
  };

  const handleSearchSubmit = (inputValue) => {
    if (inputValue.trim().length === 0) {
      console.log('Нужно ввести слово');
      return;
    }
    localStorage.setItem('movieSearch', inputValue);
    localStorage.setItem('shortMovies', shortMovies);
    if (isAllMovies.length === 0) {
      onLoading(true);
      moviesApi
        .getMovies()
        .then((movies) => {
          localStorage.setItem('allMovies', JSON.stringify(movies));
          setIsAllMovies(movies);
          handleSetFilteredMovies(movies, inputValue, shortMovies);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => onLoading(false));
    } else {
      handleSetFilteredMovies(isAllMovies, inputValue, shortMovies);
    }
  };

  const handleShortsFilms = () => {
    setShortMovies(!shortMovies);
    if (!shortMovies) {
      setFilteredMovies(filterShorts(initialMovies));
      if (filterMovies.length === 0) {
        setNotFound(true);
      }
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem('shortMovies', !shortMovies);
  };
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies__content">
        <SearchForm
          onSearchMovies={handleSearchSubmit}
          onFilter={handleShortsFilms}
          shortMovies={shortMovies}
        />
        {isLoading && <Preloader />}
        {!isLoading && (
          <MoviesCardList
            isSavedMoviesPage={false}
            movies={filterMovies}
            savedMovies={savedMovies}
            onSave={onSave}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Movies;
