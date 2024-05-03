import React, { useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import "./assets/pages/main/main.css"
import Header from './assets/components/header';
import Footer from './assets/components/footer';
import Main from './assets/pages/main/main';
import SignUp from './assets/pages/sign-up/sign';
import FrameFix from './assets/pages/framefix-tool/mainComponent';
import CreateProject from './assets/pages/create-project/create-project';
import MyProject from './assets/pages/user-files/default';

import Preview from './assets/pages/framefix-tool/preview/preview';


import axios from "axios";


 
function App() {
  
  return (
    <>
      <Router>
        <RoutesWithHeaderAndFooter />
      </Router>
    </>

  );
}

function RoutesWithHeaderAndFooter(): JSX.Element | null {
  let location = useLocation();
  const shouldHideHeader = ['/file/framefix', '/create-project/project', '/user-files/default','/proto-view'].includes(location.pathname);
  const shouldHideFooter = ['/file/framefix', '/user-files/default','/proto-view'].includes(location.pathname);

  
  return (
    <>   
        
        {!shouldHideHeader && <Header />}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/file/framefix" element={<FrameFix />} />
            <Route path="/create-project/project" element={<CreateProject />} />
            <Route path="/proto-view" element={<Preview />} />
          </Routes>
        {!shouldHideFooter && <Footer />}
    </>
  );
}

export default App;