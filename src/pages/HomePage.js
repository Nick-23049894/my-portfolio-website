import React, { useRef } from 'react';

import './HomePage.css';
import ProjectCarousel from "../components/ProjectCarousel";
import Aboutme from "../components/Aboutme";

import { useNavigate } from 'react-router-dom';
import { Parallax } from 'react-parallax';

const HomePage = () => {
    const aboutSectionRef = useRef(null);
    const navigate = useNavigate();

    const scrollToAbout = () => {
        aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const viewAllProjects = () => {
        navigate('/projects'); // Navigate to the projects page
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
    };
    
    

    return (
        <div>
            {/* Hero Section */}
            <Parallax strength={300}>
                <div className="hero-container">
                    <h1 className="hero-title">Nick Ho</h1>
                    <p className="hero-subtitle">Software Developer</p>
                    <button className="arrow-down" onClick={scrollToAbout}>
                        ↓
                    </button>
                </div>
            </Parallax>

            {/* About Me Section */}
            <div ref={aboutSectionRef}>
                <section id="about">
                    <Aboutme />
                </section>
                
                <section className="projects-section" id="projects">
                    {/* Featured Projects Section */}
                    <ProjectCarousel />
                    <button className="view-all-button" onClick={viewAllProjects}>
                        View All Projects
                    </button>

                </section>


            </div>
        </div>
    );
};

export default HomePage;
