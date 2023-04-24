import React, { useEffect, useState } from 'react';
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
  const [isAllMovies, setIsAllMovies] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const location = useLocation();

  const handleSetFilteredMovies = (movies, userQuery, shortMoviesCheckbox) => {
    const moviesList = filterMovies(movies, userQuery, false);
    if (moviesList.length === 0) {
      setUserMessage('Ничего не найдено');
      console.log('Ничего не найдено!');
    } else {
      setUserMessage('');
    }
    setInitialMovies(moviesList);
    setFilteredMovies(
      shortMoviesCheckbox ? filterShorts(moviesList) : moviesList
    );
    localStorage.setItem('movies', JSON.stringify(moviesList));
  };

  const handleSearchSubmit = (inputValue) => {
    if (inputValue === undefined || inputValue.trim().length === 0) {
      console.log('Нужно ввести ключевое слово');
      handleSetFilteredMovies(isAllMovies, inputValue, shortMovies);
      setUserMessage('Нужно ввести ключевое слово');
      return;
    }
    localStorage.setItem('movieSearch', inputValue);
    localStorage.setItem('shortMovies', shortMovies);
    if (isAllMovies.length === 0) {
      onLoading(true);
      setUserMessage('');
      moviesApi
        .getMovies()
        .then((movies) => {
          localStorage.setItem('allMovies', JSON.stringify(movies));
          setIsAllMovies(movies);
          handleSetFilteredMovies(movies, inputValue, shortMovies);
        })
        .catch((error) => {
          console.log(error);
          setUserMessage(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          );
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
        setUserMessage('Ничего не найдено');
      }
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem('shortMovies', !shortMovies);
  };

  useEffect(() => {
    if (localStorage.getItem('shortMovies') === 'true') {
      setShortMovies(true);
    } else {
      setShortMovies(false);
    }
  }, [location]);

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'));
      setInitialMovies(movies);
      if (localStorage.getItem('shortMovies') === 'true') {
        setFilteredMovies(filterShorts(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, [location]);

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
            movies={filteredMovies}
            savedMovies={savedMovies}
            onSave={onSave}
            userMessage={userMessage}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Movies;
