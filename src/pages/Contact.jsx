import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { contactButton, contactButtonsContainer, contactContainer, contactDescription, contactTitle } from './stylePages';


const Contact = () => {
    return (
        <div id="contact" className={contactContainer}>
            <h2 className={contactTitle}>Contact</h2>
            <p className={contactDescription}>If you are interested in my work and would like to discuss a potential collaboration, feel free to visit my professional profiles on LinkedIn and GitHub to learn more about my experience and skills. You can also contact me via email or WhatsApp to discuss a project or work opportunity. I look forward to hearing from you soon and working together in the future!</p>
            <div className={contactButtonsContainer}>
                <a href="https://www.linkedin.com/in/legal-brian/" target="_blank" className={contactButton}>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <p className='text-[15px]'>LinkedIn</p>
                </a>
                <a href="https://github.com/LegalBrian" target="_blank" className={contactButton}>
                    <FontAwesomeIcon icon={faGithub} />
                    <p className='text-[15px]'>Github</p>
                </a>
                <a href="mailto:legal.brian@outlook.com" target="_blank" className={contactButton}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p className='text-[15px]'>Email</p>
                </a>
                <a href="https://wa.me/541136853167" target="_blank" className={contactButton}>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <p className='text-[15px]'>WhatsApp</p>
                </a>
            </div>
        </div>
    );
}

export default Contact;