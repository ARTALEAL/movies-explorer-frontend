import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import {
  register,
  authorize,
  getContent,
  getSavedMovies,
  updateUserInfo,
  deleteMovie,
  saveMovie,
} from '../../utils/MainApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //message
  const [userMessage, setUserMessage] = useState('');
  const [userMessageError, setUserMessageError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    handleTokenCheck();
  }, [isLoggedIn]);

  // Авторизация

  const handleRegistration = async ({ name, email, password }) => {
    return register({ name, email, password })
      .then(() => {
        handleAuthorization({ email, password });
      })
      .catch((error) => {
        console.log(error);
        setUserMessageError('Что-то пошло не так...');
      });
  };

  const handleAuthorization = async (data) => {
    return authorize(data).then((data) => {
      setIsLoggedIn(true);
      localStorage.setItem('jwt', data.token);
      navigate('/movies');
      Promise.all([getContent(data.token), getSavedMovies(data.token)])
        .then(([userInfo, userMovies]) => {
          setCurrentUser(userInfo);
          localStorage.setItem('savedMovies', JSON.stringify(userMovies));
          setSavedMovies(userMovies);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  };

  // Cards
  const handleSaveMovie = (movie) => {
    const jwt = localStorage.getItem('jwt');
    const handledMovie = savedMovies.find((item) => {
      return item.movieId === movie.id;
    });
    const isLiked = Boolean(handledMovie);
    const id = handledMovie ? handledMovie._id : null;
    if (isLiked) {
      deleteMovie(id, jwt)
        .then((card) => {
          const updateSavedMovies = savedMovies.filter(
            (item) => card._id !== item._id
          );
          localStorage.setItem('savedMovies', updateSavedMovies);
          setSavedMovies(updateSavedMovies);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setIsLoading(false));
    } else {
      saveMovie(movie, jwt)
        .then((newSavedMovie) => {
          setSavedMovies((prev) => [...prev, newSavedMovie]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleDeleteMovie = (movie) => {
    setIsLoading(true);
    const jwt = localStorage.getItem('jwt');
    deleteMovie(movie._id, jwt)
      .then((card) => {
        const updateSavedMovies = savedMovies.filter(
          (item) => card._id !== item._id
        );
        localStorage.setItem('savedMovies', updateSavedMovies);
        setSavedMovies(updateSavedMovies);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  // Редактирование профиля

  const handleUpdateUser = (newUserInfo) => {
    const jwt = localStorage.getItem('jwt');
    setIsLoading(true);
    updateUserInfo(newUserInfo, jwt)
      .then((data) => {
        setCurrentUser(data);
        setUserMessage('Профиль отредактирован успешно');
        setUserMessageError('');
        setTimeout(() => {
          setUserMessage('');
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setUserMessageError('Приобновлении профиля произошла ошибка');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Выйти из профиля
  const handleSignOut = () => {
    localStorage.clear();
    setCurrentUser({});
    setIsLoggedIn(false);
    navigate('/');
  };

  //Token check
  const handleTokenCheck = () => {
    const path = location.pathname;
    const jwt = localStorage.getItem('jwt');
    getContent(jwt)
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser(data);
        setUserMessageError('');
        navigate(path);
      })
      .catch((err) => console.log(err));
    getSavedMovies(jwt)
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<Main loggedIn={isLoggedIn} />}
          ></Route>
          <Route
            exact
            path="/movies"
            element={
              <ProtectedRoute loggedIn={isLoggedIn}>
                <Movies
                  loggedIn={isLoggedIn}
                  isLoading={isLoading}
                  onLoading={setIsLoading}
                  savedMovies={savedMovies}
                  onSave={handleSaveMovie}
                  onDelete={handleDeleteMovie}
                />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            exact
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={isLoggedIn}>
                <SavedMovies
                  loggedIn={isLoggedIn}
                  isLoading={isLoading}
                  onLoading={setIsLoading}
                  savedMovies={savedMovies}
                  onDelete={handleDeleteMovie}
                />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            exact
            path="/profile"
            element={
              <ProtectedRoute loggedIn={isLoggedIn}>
                <Profile
                  loggedIn={isLoggedIn}
                  onSignOut={handleSignOut}
                  onUpdateUser={handleUpdateUser}
                  userMessage={userMessage}
                  userMessageError={userMessageError}
                />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            exact
            path="/signup"
            element={
              <Register
                onRegister={handleRegistration}
                userMessageError={userMessageError}
              />
            }
          ></Route>
          <Route
            exact
            path="/signin"
            element={<Login onLogin={handleAuthorization} />}
          ></Route>
          <Route exact path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
