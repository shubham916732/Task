import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './Page2.jsx'

export default function VideoPage() {
  const videoRef = useRef(null);
  let player;

  useEffect(() => {
    
    if (videoRef.current) {
      player = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        preload: 'auto',
      });

      return () => {
        if (player) {
          player.dispose();
        }
      };
    }
  }, []);

  return (
    <div className="bg-image video-container">
      <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center mb-5">
          
          <div className="d-flex align-items-center">
            <a className="navbar-brand p-2 fs-4 text-white" href="#">Your Logo</a>
            <a className="navbar-brand p-2 fs-4 text-white" href="#">| Cyber Safety</a>
            <a className="navbar-brand p-2 fs-5 text-white" href="#">
              <span className="fs-4">|Introduction to Cyber Safety</span> 
            </a>
          </div>

          
          <div className="d-flex align-items-center">
            <img src="menu.jpeg" className="img-btn btn rounded-circle mx-2" alt="Menu" />
            <img src="mute.jpg" className="img-btn btn rounded-circle mx-2" alt="Mute" />
            <img src="exit.jpg" className="img-btn btn rounded-circle mx-2" alt="Exit" />
          </div>
        </nav>

      <video
        ref={videoRef}
        className="video-js"
        controls
        preload="auto"
        width="720"
        height="420"
        data-setup="{}"
      >
        <source src="C:\Users\priya\Desktop\New folder (2)\task\public\Enrique Iglesias - I Like It.mp4" type="video/mp4" />
        
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a
          web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">
            supports HTML5 video
          </a>
        </p>
      </video>
      <div className="video-footer">
        <button className="back-button" onClick={() => window.history.back()}>
          Back
        </button>
      </div>
    </div>
  );
}
