import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="navmonder navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className='navlogo'>
          <a className="navbar-brand logo" href="#">Cesar Montilla</a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navall" id="navbarSupportedContent">
          <Link className={`nav-link ${activeLink === '/' ? 'active' : ''}`} to="/" onClick={() => handleLinkClick('/')}>Home</Link>
          <Link className={`nav-link ${activeLink === '/work' ? 'active' : ''}`} to="/work" onClick={() => handleLinkClick('/work')}>Work</Link>
          <Link className={`nav-link ${activeLink === '/service' ? 'active' : ''}`} to="/service" onClick={() => handleLinkClick('/service')}>Service</Link>
          <Link className={`nav-link ${activeLink === '/about' ? 'active' : ''}`} to="/about" onClick={() => handleLinkClick('/about')}>About</Link>
          <Link className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`} to="/contact" onClick={() => handleLinkClick('/contact')}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
