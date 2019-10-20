import React from 'react';
import AboutImg from '../about-img.jpg';

const Samples = () => {
    return(
    <div className="samples-container">
        <div className="samples">
            <ul>
                <li>
                    <a href="#"></a>
                </li>
                <li>
                    <a href="#"></a>
                </li>
                <li>
                    <a href="#"></a>
                </li>
            </ul>
        </div>
        <div className="contact-container">
            <div className="contact-img">
                <img src={AboutImg} alt="code snippet"/>
            </div>
            <div className="contact">
                <h1>Contact</h1>
                <p>Gmail: </p>
                <p>Yahoo: </p>
                <p>LinkedIn: </p>
                <p>GitHub: </p>
            </div>
        </div>
    </div>
    )
} 

export default Samples;