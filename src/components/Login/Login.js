import React from 'react';
import './Login.css';
import useForm from '../../hooks/useForm';
import logo from '../../images/headerLogo.svg';
import { Link } from 'react-router-dom';

const Login = () => {
  const { enteredValues, errors, handleChange } = useForm();
  return (
    <div className="login__container">
      <div className="login__header">
        <Link to="/">
          <img className="login__logo" alt="Логотип" src={logo} />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
      </div>
    </div>
  );
};

export default Login;
