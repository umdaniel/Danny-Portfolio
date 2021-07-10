import React from 'react'

import './experience.css';
import Seperator from '../../common/seperator/index';
import { ExperienceData } from '../../data/experience';
import ExperienceCard from './experience-card';

function Experience() {

    const data = ExperienceData;

    return (
        <div className="experience">
            <Seperator />
            <label className="section-title">Experience</label>
            <div className="experience-list">
                {data.map((item) => {
                    return (
                        <ExperienceCard item={item} />
                    )
                })}
            </div>
        </div>
    );
};

export default Experience;
