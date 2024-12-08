import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Community Food</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/tracking">Tracking</Link></li>
        <li><Link to="/order-history">Order History</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
