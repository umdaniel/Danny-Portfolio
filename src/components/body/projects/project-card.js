import React from 'react'

import './project-card.css';
import { FcGlobe } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{project.title}</label>
                <div className="project-links">
                    {project.demo&& (
                    <a className="project-link" href={project.demo}>
                        <div className="link-button">
                            <FcGlobe /> Demo
                        </div>
                        </a>
                    )}
                    {project.github&& (
                    <a className="project-link" href={project.github}>
                        <div className="link-button">
                            <FaGithub /> Github
                        </div>
                        </a>
                    )}
                </div>
                <p>{project.about}</p>
                <div className="project-tags">
                    {project.tags.map((tag) => {
                        return (
                            <label className="tag">{tag}</label>
                        );
                    })}
                </div>
            </div>
            <img src={project.image} className="project-photo" alt="project" />
        </div>
    );
};

export default ProjectCard;
