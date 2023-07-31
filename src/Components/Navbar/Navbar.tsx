import React from 'react';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Home } from 'react-feather';
import './Navbar.scss';
import LandingPage from '../Landing Page/LandingPage';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';

const Navbar = () => {
  return (
    <Router>
      <div>
        <div>
          <nav className="navbar-container">
            <div className="navbar">
              <Link className="home navbar-item" to="/"><Home /></Link>
              <Link className="navbar-item" to="/experience">Experience</Link>
              <Link className="navbar-item" to="/projects">Projects</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default Navbar;