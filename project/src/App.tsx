import React, {useState,useEffect}from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';
import Header from './assets/components/header';
import Footer from './assets/components/footer';

import Main from './assets/pages/main/main';
import SignUp  from  './assets/pages/sign-up/sign';
import FrameFix  from  './assets/pages/framefix-tool/framefix';


function App() {
  return (
    <Router>
      <RoutesWithHeader />
    </Router>
  );
}

function RoutesWithHeader() {
  let location = useLocation();

  return (
    <>
      {location.pathname !== "/file/framefix" && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/file/framefix" element={<FrameFix />} />
      </Routes>
    </>
  );
}

export default App;
