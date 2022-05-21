import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import MoviesMainPage from './components/pages/MoviesMainPage';
import MoviePage from './components/pages/MoviePage';
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/mainPage' element={<MoviesMainPage/>}/>
          <Route path='/moviePage' element={<MoviePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
