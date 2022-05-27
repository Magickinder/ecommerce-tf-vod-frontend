import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import MoviesMainPage from './components/pages/MoviesMainPage';
import MoviePage from './components/pages/MoviePage';
import HelpPage from './components/pages/HelpPage';
import React, { useState } from 'react';
import Payment from "./components/pages/Payment";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("logStatus") || false);

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/mainPage' element={<MoviesMainPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path='/moviePage' element={<MoviePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path='/helpPage' element={<HelpPage isLoggedIn={isLoggedIn}/>}/>
          <Route path='/checkout' element={<Payment/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
