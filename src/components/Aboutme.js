import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioImg from '../assets/images/AboutmeImg.jpg';
import './Aboutme.css'; // Link to CSS file

// Skills icons
import HTML from '../assets/icons/Icon1.png';
import CSS from '../assets/icons/Icon2.png';
import JS from '../assets/icons/Icon3.png';
import NODEJS from '../assets/icons/Icon4.png';
import PS from '../assets/icons/Icon5.png';
import AI from '../assets/icons/Icon6.png';
import PP from '../assets/icons/Icon7.png';
import Python from '../assets/icons/Icon8.png';

const MyPage = () => {
    const imageContent = [
        {
            id: 1,
            title: 'Bukit Merah Secondary',
            text: (
                <>
                    <h2>Bukit Merah Secondary</h2>
                    <ul>
                        <li>4 N-Levels Distinctions</li>
                        <li>Edusave Merit Bursary, Top 25%</li>
                        <li>Edusave Eagles Award</li>
                    </ul>
                </>
            ),
        },
        {
            id: 2,
            title: 'ITE',
            text: (
                <>
                    <h2>ITE</h2>
                    <ul>
                        <li>Higher NITEC Certificate in IT Application Development</li>
                    </ul>
                </>
            ),
        },
        {
            id: 3,
            title: 'Republic Polytechnic',
            text: (
                <>
                    <h2>Republic Polytechnic</h2>
                    <ul>
                        <li>Pursuing a Digital Design and Development</li>
                        <li>Director's Roll of Honor, AY2023 Semester 1</li>
                        <li>PCEP - Certified Entry-Level Python Programmer</li>
                    </ul>
                </>
            ),
        },
    ];

    const [selectedContent, setSelectedContent] = useState(imageContent[0]);

    return (
        <div className="page-container">
            {/* Section 1: Image and About Me */}
            <section className="section about-me">
                <img
                    src={PortfolioImg}
                    alt="About Me"
                    className="section-image"
                />
                <div className="about-me-text">
                    <h2>About Me</h2>
                    <p>
                        My name is Nick, and I am a student at Republic Polytechnic with foundational skills in software development.
                        I have experience in web development, mobile app development, and video editing.
                    </p>
                </div>
            </section>

            {/* Section 2: Skills */}
            <section className="section title-image">
                <div className="title-text">
                    <h2 className="section-title">Personal Interests and Skills</h2>
                    <p>
                        My interests include video editing, exploring immersive gaming, 3D modeling and printing, and learning new technologies.
                    </p>
                </div>
                <div className="skills-grid">
                    <img src={HTML} alt="Html" className="skill-icon" />
                    <img src={CSS} alt="Css" className="skill-icon" />
                    <img src={JS} alt="JavaScript" className="skill-icon" />
                    <img src={NODEJS} alt="Node.js" className="skill-icon" />
                    <img src={Python} alt="Python" className="skill-icon" />
                    <img src={PS} alt="Adobe Photoshop" className="skill-icon" />
                    <img src={AI} alt="Adobe Illustrator" className="skill-icon" />
                    <img src={PP} alt="Adobe Premier Pro" className="skill-icon" />
                </div>
            </section>

            {/* Section 3: Clickable Buttons */}
            <section className="section clickable-images">
                <h2>Education and Achievements</h2>
                <div className="buttons-container">
                    {imageContent.map((item) => (
                        <button
                            key={item.id}
                            className={`content-button ${selectedContent.id === item.id ? "active" : ""
                                }`}
                            onClick={() => setSelectedContent(item)}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
                <div className="content-display">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedContent.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                        >
                            {selectedContent.text}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

        </div>
    );
};

export default MyPage;
