import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main loggedIn={isLoggedIn} />}></Route>
        <Route
          exact
          path="/movies"
          element={
            <ProtectedRoute loggedIn={isLoggedIn}>
              <Movies loggedIn={isLoggedIn} />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          exact
          path="/saved-movies"
          element={
            <ProtectedRoute loggedIn={isLoggedIn}>
              <SavedMovies loggedIn={isLoggedIn} />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          exact
          path="/profile"
          element={
            <ProtectedRoute loggedIn={isLoggedIn}>
              <Profile loggedIn={isLoggedIn} />
            </ProtectedRoute>
          }
        ></Route>

        <Route exact path="/signup" element={<Register />}></Route>
        <Route exact path="/signin" element={<Login />}></Route>
        <Route exact path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
