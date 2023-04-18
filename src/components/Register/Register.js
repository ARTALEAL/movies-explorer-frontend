import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/headerLogo.svg';

const Register = () => {
  return (
    <section className="register__container">
      <div className="register__header">
        <Link to="/">
          <img className="register__logo" alt="Логотип" src={logo} />
        </Link>
      </div>
    </section>
  );
};

export default Register;
