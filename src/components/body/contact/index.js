import React from 'react'

import './contact.css';
import Seperator from '../../common/seperator/index';
import SocialContact from '../../common/socialcontact/index';
import { FaCloudDownloadAlt } from 'react-icons/fa';

function Contact() {
    return (
        <div className="contact">
            <Seperator />
            <label className="section-title">Contact Me</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Get in touch with any of these platforms</p>
                    <SocialContact />
                </div>
                <div className="download">
                    <a download href={require}>
                        <FaCloudDownloadAlt />
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
