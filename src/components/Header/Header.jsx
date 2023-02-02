import React from "react";
import "./Header.css";
import "./Header.css";
function Header() {
  return (
    <header className="header-container">
      <nav className="nav-container">
        <h1 className="header-title">Welcome</h1>
        <ul className="header-nav-list">
          <li className="header-nav-item">Home</li>
          <li className="header-nav-item">About</li>
          <li className="header-nav-item">Contact</li>
          <li className="header-nav-item">Login</li>
          <li className="header-nav-item">Sign Up</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
