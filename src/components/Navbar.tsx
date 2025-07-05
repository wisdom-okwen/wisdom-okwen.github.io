import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
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
