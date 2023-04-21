import React from 'react';
import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

const SearchForm = () => {
  return (
    <section className="search">
      <form className="search__form">
        <input type="text" placeholder="Фильм" className="search__input" />
        <button className="search__button">Найти</button>
      </form>
      <FilterCheckBox />
      <div className="search__line"></div>
    </section>
  );
};

export default SearchForm;
