import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import MoviesMainPage from './components/pages/MoviesMainPage';
import MoviePage from './components/pages/MoviePage';
import HelpPage from './components/pages/HelpPage';
import React, { useState } from 'react';
import Payment from "./components/pages/Payment";
import MyPage from './components/pages/MyPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("logStatus") || false);
  const [tableToRender, setTableToRender] = useState("movies");

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={isLoggedIn ? <Navigate to="/mainPage" replace /> : <LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/mainPage' element={<MoviesMainPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} tableToRender={tableToRender} setTableToRender={setTableToRender}/>}/>
          <Route path='/moviePage' element={<MoviePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} tableToRender={tableToRender} setTableToRender={setTableToRender}/>}/>
          <Route path='/helpPage' element={<HelpPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} tableToRender={tableToRender} setTableToRender={setTableToRender}/>}/>
          <Route path='/checkout' element={<Payment/>}/>
          <Route path='/myPage' element={<MyPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} tableToRender={tableToRender} setTableToRender={setTableToRender}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
