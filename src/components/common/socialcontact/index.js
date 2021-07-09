import React from 'react'

import './socialcontact.css';
import { SocialData } from '../../data/social';

function SocialContact() {

    const data = SocialData;

    return (
        <div className="socialcontact">
            {data.map((item) => {
            return (
                <a href={item.link}>
                    <div className="social-icon-div">
                        <img src={item.icon} className="social-icon" alt="icon" />
                    </div>
                </a>
                );
            })}
        </div>
    );
};

export default SocialContact;
