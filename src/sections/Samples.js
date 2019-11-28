import React from 'react';
import resume from './Resume_1.PDF';

const Samples = () => {
    return(
    <div className="samples-container">
        <div className="contact-container" id="contact">
            <div className="contact">
                <h1>Contact</h1>
                <p>Gmail: <a href="mailto:mpvnguyen1996@gmail.com?subject = Feedback&body = Message">mpvnguyen1996@gmail.com</a></p>
                <p>Yahoo: <a href="mailto:mpvnguyen1996@yahoo.com?subject = Feedback&body = Message">mpvnguyen1996@yahoo.com</a></p>
                <p>LinkedIn: <a href=" https://www.linkedin.com/in/michael-nguyen-0374b1182?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Br72SavDkTtmTk8V3UeFclQ%3D%3D" target="_blank">linkedin.com/mike-nguyen</a></p>
                <p>Github: <a href="https://github.com/mpvn30" target="_blank">github.com/mpvn30</a></p>  
                <p><a className="a-sample" href={resume} download>Resume Download Link</a></p>
            </div>
        </div>
        <div className="samples">
            <h1>Samples</h1>
            <ul>
                <li>
                    <p><a href="https://bnbalyze.netlify.com/" target="_blank">BnB Price Optimization</a></p>
                </li>
                <li>
                    <p><a href="https://nbacareer.netlify.com/index.html#" target="_blank">NBA Career Longevity Prediction</a></p>
                </li>
                <li>
                    <p><a href="https://build-week-2-anywhere-fitness.netlify.com/" target="_blank">Anywhere Fitness</a></p>
                </li>
                <li>
                    <p><a href="https://sleep-savy.netlify.com/" target="_blank">Sleepsavy Daily Sleep Tracker</a></p>
                </li>
            </ul>
        </div>
    </div>
    )
} 

export default Samples;