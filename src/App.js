import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Navbar from './Navbar';
import Blog from './Blog';
import Article from './Article';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          const targetPosition = target.getBoundingClientRect().top + window.scrollY;
          const startPosition = window.scrollY;
          const distance = targetPosition - startPosition;
          const duration = 1000;
          let start = null;

          window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            if (progress < duration) {
              window.requestAnimationFrame(step);
            }
          });
        }
      });
    });

    return () => {
      scrollLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  const easeInOutCubic = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  };

  const HomePage = () => (
    <div>
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );

  return (
    <Router>
      <div className='bg-base'>
        {showNavbar && <Navbar />}
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<HomePage />} />
          <Route path={`${process.env.PUBLIC_URL}/blog`} element={<Blog />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
