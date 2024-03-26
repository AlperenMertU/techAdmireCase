import './App.css';
import Register from "./pages/Register";
import Login from './pages/Login';
import MainMenu from './pages/MainMenu';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';





function App() {

  console.log(process.env.REACT_APP_LOGIN_URL);
  return (
    
    <div className="w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/users' element={<MainMenu />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

