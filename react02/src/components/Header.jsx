import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>LAMBORGHINI</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Models</a></li>
          <li><a href="/about">Dealerships</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
