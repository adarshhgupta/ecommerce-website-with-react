import React from 'react';

const Header = () => (
  <header>
    <img src="/images/logo.png" alt="Luxurious Lusture Logo" className="logo" />
    <h1>Luxurious Lusture</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#featured">Featured</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
