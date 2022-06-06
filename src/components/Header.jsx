import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Bookstore</h1>
    <nav>
      <Link to="/" className="nav-link">BOOKS</Link>
      <Link to="/categories" className="nav-link">CATEGORIES</Link>
    </nav>
  </header>
);

export default Header;
