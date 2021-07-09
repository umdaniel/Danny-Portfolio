import React from 'react'

import './about.css';
import SocialContact from '../../common/socialcontact';

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    My name is
                    <br /><span className="info-name">Danny Jeon.</span><br /> 
                    I am a Computer Information Systems undergraduate at
                    James Madison University with a passion for buisness and software
                    development.
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/profile.jpg').default}
                    className="picture"
                    alt="profile" />
                </div>
            </div>
            <SocialContact />
        </div>
    );
};

export default About;
