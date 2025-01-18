import React, { useState, useEffect } from 'react';
import Header2 from '../components/ProjectHeader';
import projectsData from '../data/projectsData';
import './ProjectsPage.css';

const ProjectsPage = () => {
    const [activeCategory, setActiveCategory] = useState('All'); // State to track the selected category
    const [hovered, setHovered] = useState(null); // State to track hovered card

    // Scroll to the top of the page on component load
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // Flatten all projects from all categories into a single array
    const allProjects = projectsData.flatMap((category) =>
        category.projects.map((project) => ({
            ...project,
            category: category.category, // Add category name to each project
        }))
    );

    // Filter projects based on active category
    const filteredProjects = allProjects.filter(
        (project) =>
            activeCategory === 'All' || project.category === activeCategory
    );

    // Get unique categories dynamically from projectsData
    const categories = ['All', ...projectsData.map((category) => category.category)];

    return (
        <div id="projectsPage">
            <Header2 />
            <div className="main-container">
                {/* Projects Title */}
                <h1 className="projects-title">All Projects</h1>

                {/* Category Filter */}
                <div className="categories-container">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`category-button ${
                                activeCategory === category ? 'active' : ''
                            }`}
                            aria-label={`Filter projects by ${category}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid or Empty State */}
                <div className="projects-container">
                    {filteredProjects.length === 0 ? (
                        <p className="no-projects-message">No projects found in this category.</p>
                    ) : (
                        <div className="projects-grid">
                            {filteredProjects.map((project, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setHovered(index)}
                                    onMouseLeave={() => setHovered(null)}
                                    className={`project-card ${
                                        hovered !== null && hovered !== index ? 'blur-scale' : ''
                                    }`}
                                >
                                    <img
                                        src={project.coverImage}
                                        alt={project.name}
                                        className="project-cover"
                                    />
                                    <div
                                        className={`project-info-overlay ${
                                            hovered === index ? 'visible' : ''
                                        }`}
                                    >
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                                        <div className="project-links">
                                            {project.links.map((link, linkIndex) => (
                                                <a
                                                    key={linkIndex}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-link"
                                                >
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
