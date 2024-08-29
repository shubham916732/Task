import React from 'react'
import './Page1.css'
import { Link } from 'react-router-dom';

export default function Page1() {
  return (
    <div className='bgg'>
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
        <div>
          <img className='splash' src="splash.jpg" alt="" />
        </div>
        <div className='center'>
          <p>Welcome to</p>
          <h1>Cyber Safety</h1>
          <p>click start when you are ready to begin.</p>
          <Link to="/submit"><button className='btn btn-primary'>submit</button></Link>
        </div>
    </div>
  )
}
