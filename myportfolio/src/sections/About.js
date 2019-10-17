import React from 'react';
import AboutImg from '../about-img.jpg';

const About = () => {
    return(
        <>
        <div className="about">
            <div className="about-header">
                <h1>Hello! I am Mike, I am a Software Developer.</h1>
            </div>
            <div className="about-content">
                <div className="about-img-container">
                    <img src= {AboutImg} alt="null" className="about-img"/>
                </div>
                <div className="about-p-container">
                <p>I am currently a student at Lambda School taking up Full Stack Web Development. I am an enthusiast of technology and I am always open to learning more. When I am away from my desk, I love to travel and experience everything in life that defines fun.
                </p>
                </div>
            </div>
        </div>
        <div className="skills">
            <div className="skills-container">
                <div>Icon</div>
                <h3>HTML</h3>
                <p className="skills-sub">Semantic HTML, Pug</p>
            </div>
            <div className="skills-container">
                <div>Icon</div>
                <h3>CSS</h3>
                <p className="skills-sub">LESS, SASS/SCSS, Bootstrap, Reactstrap, styled-components</p>
            </div>
            <div className="skills-container">
                <div>Icon</div>
                <h3>JavaScript</h3>
                <p className="skills-sub">React.js</p>
            </div>
        </div>
        </>
    )
}

export default About;