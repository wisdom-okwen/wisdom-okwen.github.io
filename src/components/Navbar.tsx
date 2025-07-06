
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((open) => !open);
  const handleClose = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
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
        <li className={styles.navbarItem}><a href="#home">Home</a></li>
        <li className={styles.navbarItem}><a href="#news">News</a></li>
        <li className={styles.navbarItem}><a href="#experience">Experience</a></li>
        <li className={styles.navbarItem}><a href="#publications">Publications</a></li>
        <li className={styles.navbarItem}><a href="#projects">Projects</a></li>
        <li className={styles.navbarItem}><a href="#education">Education</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
