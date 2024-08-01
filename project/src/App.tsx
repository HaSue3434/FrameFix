import React, { useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { pages } from './pages';
import "./assets/pages/main/main.css"
import Header from './assets/components/header';
import Footer from './assets/components/footer';
import Main from './assets/pages/main/main';
import FrameFix from './assets/pages/framefix-tool/main';
import CreateProject from './assets/pages/create-project/create-project';
import Preview from './assets/pages/framefix-tool/preview/views';

 
function App() {
  
  return (
    <>
      <Router>
        <RoutesWithComponents />
      </Router>
    </>

  );
}

function RoutesWithComponents(): JSX.Element | null {
  let location = useLocation();
  const { pathname } = useLocation();
  const shouldHideHeader = ['/file/framefix', '/create-project/project', '/user-files/default','/proto-view'].includes(location.pathname);
  const shouldHideFooter = ['/file/framefix', '/user-files/default','/proto-view'].includes(location.pathname);
  const title = 'FrameFix: AI-Powered turning ideas into Reality'; 

  useEffect(() => {
    const page = pages.find((p) => p.path === pathname);
    if (page) {
      if(page.title.toUpperCase()==='framefix'.toUpperCase()){
        document.title = title;
      } else document.title = title + ': ' + page.title; 
    }
  }, [pathname,pages]);

  return (
    <>   
        
        {!shouldHideHeader && <Header />}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/file/framefix" element={<FrameFix />} />
            <Route path="/create-project/project" element={<CreateProject />} />
            <Route path="/proto-view" element={<Preview />} />
          </Routes>
        {!shouldHideFooter && <Footer />}
    </>
  );
}

export default App;