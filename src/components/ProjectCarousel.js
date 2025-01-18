import React from 'react';
import './ProjectCarousel.css';
import videobg from '../assets/videobg.mp4';

import TaskManager from '../assets/images/Task-Manager.png';
import PizzaCo from '../assets/images/Nick’s-Pizza-Co.png';

const MultiCardCarousel = () => {
  return (
    <div className="carousel-container">
      <video src={videobg} autoPlay loop muted />
      <div className="video-tint"></div>
      <header className="carousel-header">
        <h1 className="header-title">Welcome to My Projects</h1>
      </header>
      <div className="carousel-wrapper">
        <div className="carousel-inner">
          {/* First Project */}
          <div className="carousel-card">
            <img className="card-image" src={TaskManager} alt="Task Manager" />
            <h3 className="card-title">Task Manager</h3>
            <div className="card-links">
              <a href="https://example.com/demo1" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href="https://github.com/example1" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
          {/* Second Project */}
          <div className="carousel-card">
            <img className="card-image" src={PizzaCo} alt="Nick’s Pizza Co" />
            <h3 className="card-title">Nick’s Pizza Co</h3>
            <div className="card-links">
              <a href="https://example.com/demo2" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href="https://github.com/example2" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
          {/* Third Project */}
          <div className="carousel-card">
            <img
              className="card-image"
              src="https://via.placeholder.com/300"
              alt="Project 3"
            />
            <h3 className="card-title">Project 3</h3>
            <div className="card-links">
              <a href="https://example.com/demo3" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href="https://github.com/example3" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
