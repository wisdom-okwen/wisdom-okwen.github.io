
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const getPreferredTheme = () => {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getPreferredTheme());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggle = () => setMenuOpen((open) => !open);
  const handleClose = () => setMenuOpen(false);
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <nav className={styles.navbar}>
      <div className={styles.themeToggle}>
        <button
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className={styles.themeToggleBtn}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <FaSun size={22} /> : <FaMoon size={22} />}
        </button>
      </div>
      <div className={styles.hamburger}>
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className={styles.hamburgerBtn}
          onClick={handleToggle}
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>
      <ul className={`${styles.navbarList} ${menuOpen ? styles.open : ''}`} onClick={handleClose}>
        <li className={styles.navbarItem}><a href="#about">Home</a></li>
        <li className={styles.navbarItem}><a href="#news">News</a></li>
        <li className={styles.navbarItem}><a href="#education">Education</a></li>
        <li className={styles.navbarItem}><a href="#skills">Skills & Interests</a></li>
        <li className={styles.navbarItem}><a href="#experience">Experience</a></li>
        <li className={styles.navbarItem}><a href="#publications">Publications</a></li>
        <li className={styles.navbarItem}><a href="#projects">Projects</a></li>
        <li className={styles.navbarItem}><Link to="/blog" target='_blank'>Blog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
