import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Navbar = () => {
  // State for managing mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Example of useEffect - changes document title on component mount
  useEffect(() => {
    document.title = 'React Demo - Home';
    
    // Example of cleanup function
    return () => {
      document.title = 'React Demo';
    };
  }, []);
  
  // Event handler for toggling mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          React Demo
        </Link>
        
        {/* Mobile menu toggle button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          Menu {isMenuOpen ? '✕' : '☰'}
        </button>
        
        {/* Conditional rendering based on state */}
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

