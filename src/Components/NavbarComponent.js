import React, { useState } from 'react';
import '../css/navbar.css'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">Algo-Trading-App</div>
      <button className="menu-toggle" onClick={handleMenuToggle}>
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;


