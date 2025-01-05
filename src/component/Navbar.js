import React  from 'react';

import './Navbar.css';
import logo from '../Asset/logo.png'; 

const Navbar = () => {

  
  return (
    <header className="navbar">
      {/* Left Section (Logo) */}
      <div className="navbar-left">
        <img src={logo} alt="Lyfify Logo" className="logo" />
      </div>

      {/* Center Section (Links) */}
      <nav className="navbar-links">
        <ul>
          <li >Home</li>
          <li>Dashboard</li>
          <li>Patients</li>
          <li>Insights</li>
        </ul>
      </nav>

      {/* Right Section (Notification & Profile) */}
      <div className="navbar-right">
        <span className="notification-bell">🔔<span className="notification-dot"></span></span>
        <div className="user-profile">
          <span className="user-icon" >👤</span>
          <span className="user-name" >DrMohan</span>
          
        </div>
      </div>
    </header>
  );
};

export default Navbar;
