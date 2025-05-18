import React, { useState } from 'react';
import Zostel from './pages/Zostel';
import Hostel from './pages/Hostel';
import Dormitory from './pages/Dormitory';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zostel" element={<Zostel />} />
        <Route path="/hostel" element={<Hostel />} />
        <Route path="/dormitory" element={<Dormitory />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
