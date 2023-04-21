import React from 'react';
import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import useForm from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';

const SearchForm = () => {
  const location = useLocation();
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
