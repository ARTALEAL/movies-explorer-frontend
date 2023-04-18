import React from 'react';
import './MoviesCard.css';

const MoviesCard = ({ isSavedMoviesPage, movie }) => {
  return (
    <div className="card">
      <img
        className="card__image"
        src={movie.image}
        alt={`Обложка: ${movie.name}`}
      />
      <div className="card__description">
        <span className="card__name">{movie.name}</span>
        <span className="card__duration">{movie.duration}</span>
      </div>
      {movie.saved && !isSavedMoviesPage && (
        <button className="card__button_saved" />
      )}
      {isSavedMoviesPage ? (
        <button className="card__button_delete" />
      ) : (
        <button className="card__button">Сохранить</button>
      )}
    </div>
  );
};

export default MoviesCard;
