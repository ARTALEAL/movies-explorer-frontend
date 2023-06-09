import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import { filterMovies, filterShorts } from '../../utils/utils';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

const SavedMovies = ({ loggedIn, savedMovies, isLoading, onDelete }) => {
  const [shortMovies, setShortMovies] = useState(false);
  const [showedMovies, setShowedMovies] = useState(savedMovies);
  const [filteredMovies, setFilteredMovies] = useState(showedMovies);
  const [searchQuery, setSearchQuery] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const location = useLocation();

  const handleSearchSubmit = (inputValue) => {
    if (inputValue === undefined || inputValue.trim().length === 0) {
      console.log('Нужно ввести ключевое слово');
      setUserMessage('Нужно ввести ключевое слово');
      setTimeout(() => {
        setUserMessage('');
      }, 2000);
      return;
    }

    const moviesList = filterMovies(savedMovies, inputValue, shortMovies);
    setSearchQuery(inputValue);
    if (moviesList.length === 0) {
      console.log('Ничего не найдено');
      setUserMessage('Ничего не найдено');
    } else {
      setUserMessage('');
      setFilteredMovies(moviesList);
      setShowedMovies(moviesList);
    }
  };

  const handleShortsFilms = () => {
    if (!shortMovies) {
      setShortMovies(true);
      localStorage.setItem('shortSavedMovies', true);
      setShowedMovies(filterShorts(filteredMovies));
      filterShorts(filteredMovies).length === 0
        ? setUserMessage('Ничего не найдено')
        : setUserMessage('');
    } else {
      setShortMovies(false);
      localStorage.setItem('shortSavedMovies', false);
      filteredMovies.length === 0
        ? setUserMessage('Ничего не найдено')
        : setUserMessage('');
      setShowedMovies(filteredMovies);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('shortSavedMovies') === 'true') {
      setShortMovies(true);
      setShowedMovies(filterShorts(savedMovies));
    } else {
      setShortMovies(false);
      const moviesList = filterMovies(savedMovies, searchQuery, shortMovies);
      setShowedMovies(moviesList);
    }
  }, [savedMovies, location, shortMovies]);

  useEffect(() => {
    setFilteredMovies(savedMovies);
    savedMovies.length !== 0
      ? setUserMessage('')
      : setUserMessage('Ничего не найдено');
  }, [savedMovies]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="saved__movies">
        <SearchForm
          onSearchMovies={handleSearchSubmit}
          onFilter={handleShortsFilms}
          shortMovies={shortMovies}
          isSavedMoviesPage={true}
        />
        {userMessage ? <span>{userMessage}</span> : <span></span>}
        {isLoading && <Preloader />}
        {!isLoading && (
          <MoviesCardList
            isSavedMoviesPage={true}
            movies={showedMovies}
            savedMovies={savedMovies}
            onDelete={onDelete}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
