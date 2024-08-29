import React from 'react'
import './Pagee2.css'
import { Link } from 'react-router-dom';

export default function Pagee2() {
  return (
    <div className="bg-image">
      <div className="container-fluid d-flex flex-column">
        
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

        <div className="row flex-grow-1 justify-content-center align-items-center">
          <div className="col-auto position-relative">
           
            <img src="menu-panel.png" alt="Menu Panel" className="img-Panel rounded-5" />
            
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
              <p>
                In this course, we'd like to use your name
                <br />
                (you can make up a name if you prefer).
                <br />
                Please enter it here:
              </p>
              <form action="">
                <input className="form-control mb-3" placeholder="Type Here" type="text" />
                <Link to="/introduction"><button className="btn btn-primary rounded-4">Submit</button></Link>
              </form>
            </div>

            <div className="position-absolute bottom-0 start-0 p-3 btn-RL d-flex align-items-center top-100 mt-5">
              <img src="back.jpeg" className="img-btn btn rounded-circle" alt="Back" />
              <p className="ms-2 mb-0 text-white">Back</p>
            </div>
            <div className="position-absolute bottom-0 end-0 p-3 btn-RL d-flex align-items-center top-100 mt-5">
              <p className="ms-2 mb-0 text-white">Next</p>
              <img src="next.jpeg" className="img-btn btn rounded-circle" alt="Next" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-img">
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </div>
  )
}
