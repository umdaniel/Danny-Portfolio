import React from 'react'

import './experience-card.css';

function ExperienceCard({ item }) {
    return (
        <div className="experience-card">
            <img src={item.companyLogo} className="experience-logo" alt="company" />
            <div className="work-info">
                <label className="comapny-name">{item.company}</label>
                <div className="work-dates">
                    <label>{item.dateJoined}</label>-<label>{item.dateEnd}</label>
                </div>
                <div className="work-desc">
                    <p>{item.work}</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
