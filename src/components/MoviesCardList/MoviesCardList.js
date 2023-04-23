import React, { useState } from 'react';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ isSavedMoviesPage, movies, onSave, onDelete }) => {
  const [showMoviesList, setShowMoviesList] = useState(movies);
  return (
    <section className="cards">
      <ul className="cards__list">
        {showMoviesList.sort().map((movie) => {
          return (
            <MoviesCard
              key={isSavedMoviesPage ? movie.movieId : movie.id}
              movie={movie}
              isSavedMoviesPage={isSavedMoviesPage}
              onSave={onSave}
              onDelete={onDelete}
            />
          );
        })}
      </ul>

      <button
        className={
          !isSavedMoviesPage ? 'cards__button' : 'cards__button_hidden'
        }
      >
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;
