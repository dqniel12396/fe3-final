import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from './utils/global.context';
import '../Style/Navbar.css';

import SunIcon from '../Media/relleno.svg';
import MoonIcon from '../Media/dark-mode-night-moon-svgrepo-com.svg';


const logoUrl = 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode400/5236467/5236467-1655160789012-0df4009db8388.jpg'; // Cambia este enlace por la URL de tu logo

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { theme } = state;

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-content">
        <Link to="/" className="logo-link">
          <img src={logoUrl} alt="Logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/favs">Favoritos</Link></li>
        </ul>
        <button
          onClick={toggleTheme}
          className={`theme-toggle-btn ${theme === 'dark' ? 'dark' : ''}`}
        >
          <img
            src={theme === 'light' ? SunIcon : MoonIcon}
            alt={theme === 'light' ? 'Icono de Sol' : 'Icono de Luna'}
            className="theme-icon"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
