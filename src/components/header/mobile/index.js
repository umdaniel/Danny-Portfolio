import React from 'react'

import './mobile.css';
import { FcCollapse, FcDeployment, FcDiploma2,
FcDocument, FcCollaboration } from 'react-icons/fc';

function Mobile({ isOpen, setIsOpen }) {
    return (
        <div className="mobile">
            <div className="close-icon"
            onClick={() => setIsOpen(!isOpen)}>
                <FcCollapse />
            </div>
            <div className="mobile-options">
            <div className="mobile-option">
                <a href="#project">
                    <FcDeployment />
                    Projects
                </a>
            </div>
            <div className="mobile-option">
                <a href="#skills">
                    <FcDiploma2 />
                    Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#experience">
                    <FcDocument />
                    Experience
                </a>
            </div>
            <div className="mobile-option">
                <a href="#contact">
                    <FcCollaboration />
                    Contact
                </a>
            </div>
            </div>
        </div>
    );
};

export default Mobile;
