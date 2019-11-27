import React from 'react';
import AboutImg from '../about-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs} from '@fortawesome/free-brands-svg-icons'



const About = () => {
    return(
        <>
        <div className="about" id="about">
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
            <div className="about-experiment">
                <a className="landing-button" href="#about">
                    <span class="text">View Samples</span>
                    <span class="line -right"></span>
                    <span class="line -top"></span>
                    <span class="line -left"></span>
                    <span class="line -bottom"></span>
                </a>
            </div>
        </div>
        <div className="skills">
            <div className="skills-header">
                <h3 className="skills-h3">Stack</h3>
            </div>
            <div className="skills-content">
                <div className="skills-container">
                    <div className="skill-icons"><FontAwesomeIcon icon={faHtml5} size="3x" /></div>
                    <h3 className="skills-title">HTML</h3>
                    <p className="skills-sub">Semantic HTML, Pug</p>
                </div>
                <div className="skills-container">
                    <div className="skill-icons"><FontAwesomeIcon icon={faCss3} size="3x" /></div>
                    <h3 className="skills-title">CSS</h3>
                    <p className="skills-sub">LESS, SASS/SCSS, Bootstrap, Reactstrap</p>
                </div>
                <div className="skills-container">
                    <div className="skill-icons"><FontAwesomeIcon icon={faJs} size="3x"/></div>
                    <h3 className="skills-title">JavaScript</h3>
                    <p className="skills-sub">React.js, Node.js, Express</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;