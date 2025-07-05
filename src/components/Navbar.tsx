import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav>
      {/* TODO: Add navigation links and logo */}
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#publications">Publications</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
