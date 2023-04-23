import React from 'react';
import './MoviesCard.css';

const MoviesCard = ({ isSavedMoviesPage, movie, onSave, onDelete }) => {
  return (
    <div className="card">
      <img
        className="card__image"
        src={
          isSavedMoviesPage
            ? movie.image
            : `https://api.nomoreparties.co/${movie.image.url}`
        }
        alt={`Обложка: ${movie.nameRU}`}
      />
      <div className="card__description">
        <span className="card__name">{movie.nameRU}</span>
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
