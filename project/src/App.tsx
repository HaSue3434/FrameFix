import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { pages } from './pages';
import "./assets/pages/main/main.css";
import Header from './assets/components/header';
import Footer from './assets/components/footer';
import Main from './assets/pages/main/main';
import FrameFix from './assets/pages/framefix-tool/main';
import CreateProject from './assets/pages/create-project/create-project';
import Preview from './assets/pages/framefix-tool/preview/views';
import SignUp from './assets/pages/login/sign-up';

function App() {
  return (
    <Router>
      <RoutesWithComponents />
    </Router>
  );
}

function RoutesWithComponents() {
  const location = useLocation();
  const { pathname } = location;

  const hiddenHeaderPaths = [
    '/file/framefix',
    '/create-project/project',
    '/user-files/default',
    '/proto-view',
    '/sign-up',
  ];

  const hiddenFooterPaths = [
    '/file/framefix',
    '/create-project/project',
    '/user-files/default',
    '/proto-view',
    '/sign-up',
  ];

  const shouldHideHeader = hiddenHeaderPaths.includes(pathname);
  const shouldHideFooter = hiddenFooterPaths.includes(pathname);

  const title = 'FrameFix: AI-Powered turning ideas into Reality';

  useEffect(() => {
    const page = pages.find((p) => p.path === pathname);
    const pageTitle = page ? page.title : '';
    document.title = pageTitle.toUpperCase() === 'FRAMEFIX' ? title : `${pageTitle}`;
  }, [pathname]);

  return (
    <>
      {!shouldHideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/file/framefix" element={<FrameFix />} />
        <Route path="/create-project/project" element={<CreateProject />} />
        <Route path="/proto-view" element={<Preview />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/*" element={<Main />} /> 
      </Routes>
      {!shouldHideFooter && <Footer />}
    </>
  );
}

export default App;