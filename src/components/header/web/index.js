import React from 'react'

import './web.css';
import { FcDeployment, FcDiploma2, FcDocument,
FcCollaboration } from 'react-icons/fc';

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#project">
                    <FcDeployment />
                    Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                    <FcDiploma2 />
                    Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#experience">
                    <FcDocument />
                    Experience
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                    <FcCollaboration />
                    Contact
                </a>
            </div>
        </div>
    );
};

export default Web;
