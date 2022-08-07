import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavBar from './components/TopNavBar'
import HomePage from './HomePage/HomePage.js';
import Photography from './Photography/Photography.js'
import BotNavBar from './components/BotNavBar';
import './App.css';


export default function App() {
  return (
    <div className='page'>
      <Router>
        <TopNavBar />
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/photography' element={<Photography/>}/>
        </Routes>
        <BotNavBar />
      </Router>
    </div>
  );
}