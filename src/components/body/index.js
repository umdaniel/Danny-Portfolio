import React from 'react'

import './body.css';
import About from './about/index';
import Projects from './projects/index';
import Skills from './skills/index';
import Experience from './experience/index';

function Body() {
    return (
        <div className="body">
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="experience">
                <Experience />
            </section>
        </div>
    );
};

export default Body;
