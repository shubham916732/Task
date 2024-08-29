import React from 'react';
import './Page4.css';
import { Link } from 'react-router-dom';

export default function Page4() {
  return (
    <div className="page-container">
      <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center mb-5">
          
          <div className="d-flex align-items-center">
            <a className="loggg navbar-brand p-2 fs-4 text-white" href="#">Your Logo</a>
          </div>

          
          <div className="d-flex align-items-center">
          <div className="text-center mx-2">
            <img src="mute.jpg" className="img-btn btn rounded-circle" alt="Mute" />
            <p className="mt-2 text-white">mute</p>
          </div>
          <div className="text-center mx-2">
            <img src="exit.jpg" className="img-btn btn rounded-circle" alt="Exit" />
            <p className="mt-2 text-white">exit</p>
          </div>
        </div>
        </nav>

      <main className="content">
        <div className="policy-text">
          <p>Our Policy sets out responsibilities and standards to help keep our data safe.</p>
          <p>If you are not yet familiar with it, select the Policy image to take a look, otherwise select Next to continue.</p>
        </div>
        <div className="policy-image">
          <img src="your-policy.jpg" alt="Your Policy" />
          <div className="zoom-icon">
            <img src="zoom-icon.jpg" alt="Zoom" />
          </div>
        </div>
      </main>

      <footer className="footer">
        <Link to="/previous">
          <button className="btn-back">Back</button>
        </Link>
        <Link to="/next">
          <button className="btn-next">Next</button>
        </Link>
      </footer>
    </div>
  );
}
