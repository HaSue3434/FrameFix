import React from 'react';
import logo from './logo.svg';
import {Router, Route, Link, Routes} from "react-router-dom";
import Test from './pages/Loginform';
import './App.css';
import Loginform from './pages/Loginform';


function App() {
  return (
    <div className='page'>
      <Loginform></Loginform>
    </div>
  );
}

export default App;
