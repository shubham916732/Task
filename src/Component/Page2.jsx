import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page2.css';

export default function MenuPage() {
  const navigate = useNavigate();

  const menuItems = [
    "Introduction to cyber safety",
    "Passwords",
    "Socially engineered attacks",
    "Data security risks",
    "Your responsibilities",
    "More information",
  ];

  const handleItemClick = (index) => {
    if (index === 0) {
      navigate('/video');
    }
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
      <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center mb-5">
          
          <div className="d-flex align-items-center">
            <a className="navbar-brand p-2 fs-4 text-white" href="#">Your Logo</a>
            <a className="navbar-brand p-2 fs-4 text-white" href="#">| Cyber Safety</a>
            <a className="navbar-brand p-2 fs-5 text-white" href="#">
              <span className="fs-4">|</span> Introduction
            </a>
          </div>

          
          <div className="d-flex align-items-center">
            <img src="menu.jpeg" className="img-btn btn rounded-circle mx-2" alt="Menu" />
            <img src="mute.jpg" className="img-btn btn rounded-circle mx-2" alt="Mute" />
            <img src="exit.jpg" className="img-btn btn rounded-circle mx-2" alt="Exit" />
          </div>
        </nav>
        <div className="menu-title">Menu</div>
        <div className="menu-subtitle">Select the first topic to begin.</div>
      </div>
      <div className="menu-list">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${index === 0 ? 'active' : ''}`}
            onClick={() => handleItemClick(index)} 
          >
            <div className="menu-item-text">{index + 1}. {item}</div>
            <div className="menu-item-icon">➔</div>
          </div>
        ))}
      </div>
    </div>
  );
}
