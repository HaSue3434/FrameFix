import React, {useState,useEffect}from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Header from './assets/components/header';
import Footer from './assets/components/footer';

import Main from './assets/pages/main/main';
import SignUp  from  './assets/pages/sign-up/sign';

function App() {
  return (
    <>
    
      <Router>
        <Header />
        <Routes>
          <Route path = '/' element = {<Main />}/>
          <Route path = '/sign-up' element = {<SignUp />}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
