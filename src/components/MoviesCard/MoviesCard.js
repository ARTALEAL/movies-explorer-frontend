import React from 'react';
import './MoviesCard.css';
import { convertMinToHours } from '../../utils/utils';

const MoviesCard = ({ isSavedMoviesPage, movie, onSave, onDelete }) => {
  const handleSaveCard = () => {
    onSave(movie);
  };

  const handleDeleteCard = () => {
    onDelete(movie);
  };

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
        <span className="card__duration">
          {convertMinToHours(movie.duration)}
        </span>
      </div>
      {movie.saved && !isSavedMoviesPage && (
        <button className="card__button_saved" onClick={handleSaveCard} />
      )}
      {isSavedMoviesPage ? (
        <button className="card__button_delete" onClick={handleDeleteCard} />
      ) : (
        <button className="card__button" onClick={handleSaveCard}>
          Сохранить
        </button>
      )}
    </div>
  );
};

export default MoviesCard;
