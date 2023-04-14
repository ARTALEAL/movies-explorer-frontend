import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Main from '../Main/Main';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main loggedIn={isLoggedIn} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
