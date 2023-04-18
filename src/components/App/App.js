import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main loggedIn={isLoggedIn} />}></Route>
        <Route
          exact
          path="/movies"
          element={<Movies loggedIn={isLoggedIn} />}
        ></Route>
        <Route
          exact
          path="/saved-movies"
          element={<SavedMovies loggedIn={isLoggedIn} />}
        ></Route>
        <Route
          exact
          path="/profile"
          element={<Profile loggedIn={isLoggedIn} />}
        ></Route>
        <Route exact path="/signup" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
