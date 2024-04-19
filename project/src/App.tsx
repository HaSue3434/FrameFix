import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import "./assets/pages/main/main.css"
import Header from './assets/components/header';
import Footer from './assets/components/footer';
import Main from './assets/pages/main/main';
import SignUp from './assets/pages/sign-up/sign';
import FrameFix from './assets/pages/framefix-tool/mainComponent';
import CreateProject from './assets/pages/create-project/create-project';


function App() {
  
  return (
    
    <Router>
      <RoutesWithHeaderAndFooter />
    </Router>
  );
}

function RoutesWithHeaderAndFooter() {
  let location = useLocation();
  const shouldHideHeader = location.pathname === "/file/framefix" || location.pathname === "/create-project/project";
  const shouldHideFooter = location.pathname === "/file/framefix";


  return (
    <>
       {!shouldHideHeader && <Header />}

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/file/framefix" element={<FrameFix />} />
            <Route path="/create-project/project" element={<CreateProject />} />
          </Routes>
      
        {!shouldHideFooter && <Footer />}
    </>
  );
}

export default App;