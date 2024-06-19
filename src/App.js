import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Navbar from './Navbar';
import Blog from './Blog';
import Article from './Article';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    if (location.pathname === `${process.env.PUBLIC_URL}/` || location.pathname === `${process.env.PUBLIC_URL}`) {
      window.addEventListener('scroll', handleScroll);
    } else {
      setShowNavbar(true);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const HomePage = () => (
    <div>
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );

  return (
    <div className='bg-base'>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<HomePage />} />
        <Route path={`${process.env.PUBLIC_URL}/blog`} element={<Blog />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
