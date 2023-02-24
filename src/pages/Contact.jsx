import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


const Contact = () => {
    return (
        <div id="contact" className="bg-[rgb(0,0,25)] text-[#ffffff] text-center p-[40px]">
            <h2 className="text-[40px] mb-4">Contact</h2>
            <p className="text-[20px] mb-6">If you are interested in my work and would like to discuss a potential collaboration, feel free to visit my professional profiles on LinkedIn and GitHub to learn more about my experience and skills. You can also contact me via email or WhatsApp to discuss a project or work opportunity. I look forward to hearing from you soon and working together in the future!</p>
            <div className="flex flex-row justify-evenly my-[20px]">
                <a href="https://www.linkedin.com/in/legal-brian/" target="_blank" className="flex justify-center items-center text-[#ffffff] text-[27px] w-[160px] h-[50px] bg-[rgba(0,0,0,0.7)] rounded-full border-[#ffffff] border-[2px] hover:bg-[rgba(75,75,255,1)] transition duration-500 flex flex-row justify-evenly">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <p className='text-[20px]'>LinkedIn</p>
                </a>
                <a href="https://github.com/LegalBrian" target="_blank" className="flex justify-center items-center text-[#ffffff] text-[27px] w-[160px] h-[50px] bg-[rgba(0,0,0,0.7)] rounded-full border-[#ffffff] border-[2px] hover:bg-[rgba(75,75,255,1)] transition duration-500 flex flex-row justify-evenly">
                    <FontAwesomeIcon icon={faGithub} />
                    <p className='text-[20px]'>Github</p>
                </a>
                <a href="mailto:brianlegal11@gmail.com" target="_blank" className="flex justify-center items-center text-[#ffffff] text-[27px] w-[160px] h-[50px] bg-[rgba(0,0,0,0.7)] rounded-full border-[#ffffff] border-[2px] hover:bg-[rgba(75,75,255,1)] transition duration-500 flex flex-row justify-evenly">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p className='text-[20px]'>Email</p>
                </a>
                <a href="https://wa.me/541136853167" target="_blank" className="flex justify-center items-center text-[#ffffff] text-[27px] w-[160px] h-[50px] bg-[rgba(0,0,0,0.7)] rounded-full border-[#ffffff] border-[2px] hover:bg-[rgba(75,75,255,1)] transition duration-500 flex flex-row justify-evenly">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <p className='text-[20px]'>WhatsApp</p>
                </a>
            </div>
        </div>
    );
}

export default Contact;

