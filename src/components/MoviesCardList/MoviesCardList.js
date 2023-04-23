import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { checkSavedCard } from '../../utils/utils';
import useScreenWidth from '../../hooks/useScreenWidth';

import {
  BIG_SCREEN_MOVIES_QUANTITY,
  MIDDLE_SCREEN_MOVIES_QUANTITY,
  SMALL_SCREEN_MOVIES_QUANTITY,
  MORE_MOVIES_BIG_SCREEN_MOVIES_QUANTITY,
  MORE_MOVIES_SMALL_SCREEN_MOVIES_QUANTITY,
  BIG_SCREEN,
  SMALL_SCREEN,
} from '../../utils/constants';

const MoviesCardList = ({
  isSavedMoviesPage,
  movies,
  onSave,
  onDelete,
  savedMovies,
  userMessage,
}) => {
  const [showMoviesList, setShowMoviesList] = useState(movies);
  const screenWidth = useScreenWidth();
  const searchedMoviesCount = movies ? movies.length : 0;

  const handleMoreClick = () => {
    if (screenWidth > BIG_SCREEN) {
      setShowMoviesList(
        movies.slice(
          0,
          showMoviesList.length + MORE_MOVIES_BIG_SCREEN_MOVIES_QUANTITY
        )
      );
    } else {
      setShowMoviesList(
        movies.slice(
          0,
          showMoviesList.length + MORE_MOVIES_SMALL_SCREEN_MOVIES_QUANTITY
        )
      );
    }
  };
  useEffect(() => {
    if (screenWidth > BIG_SCREEN) {
      setShowMoviesList(movies.slice(0, BIG_SCREEN_MOVIES_QUANTITY));
    } else if (screenWidth > SMALL_SCREEN && screenWidth <= BIG_SCREEN) {
      setShowMoviesList(movies.slice(0, MIDDLE_SCREEN_MOVIES_QUANTITY));
    } else if (screenWidth <= SMALL_SCREEN) {
      setShowMoviesList(movies.slice(0, SMALL_SCREEN_MOVIES_QUANTITY));
    } else {
      setShowMoviesList(movies);
    }
  }, [screenWidth, movies]);

  return (
    <section className="cards">
      {userMessage ? <span>{userMessage}</span> : <span></span>}
      <ul className="cards__list">
        {showMoviesList.sort().map((movie) => {
          return (
            <MoviesCard
              key={isSavedMoviesPage ? movie.movieId : movie.id}
              movie={movie}
              isSavedMoviesPage={isSavedMoviesPage}
              onSave={onSave}
              onDelete={onDelete}
              saved={checkSavedCard(savedMovies, movie)}
            />
          );
        })}
      </ul>
      {!isSavedMoviesPage &&
        showMoviesList &&
        searchedMoviesCount !== showMoviesList.length && (
          <button className="cards__button" onClick={handleMoreClick}>
            Ещё
          </button>
        )}
    </section>
  );
};

export default MoviesCardList;
