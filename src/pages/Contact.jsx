import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { contactButton, contactButtonsContainer, contactContainer, contactDescription, contactTitle } from './stylePages';
import { FormattedMessage } from 'react-intl';

const Contact = () => {
    return (
        <div id="contact" className={contactContainer}>
            <h2 className={contactTitle}>
                <FormattedMessage 
                    id="contact.title" 
                    defaultMessage="Contacto" 
                />
            </h2>
            <p className={contactDescription}>
                <FormattedMessage 
                    id="contact.description" 
                    defaultMessage="Si estás interesado en mi trabajo y te gustaría discutir una posible colaboración, no dudes en visitar mis perfiles profesionales en LinkedIn y GitHub para obtener más información sobre mi experiencia y habilidades. También puedes contactarme por correo electrónico o WhatsApp para hablar sobre un proyecto o una oportunidad laboral. ¡Espero tener noticias tuyas pronto y trabajar juntos en el futuro!" 
                />
            </p>
            <div className={contactButtonsContainer}>
                <a href="https://www.linkedin.com/in/legal-brian/" target="_blank" rel="noreferrer" className={contactButton}>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <p className='text-[15px]'>LinkedIn</p>
                </a>
                <a href="https://github.com/LegalBrian" target="_blank" rel="noreferrer" className={contactButton}>
                    <FontAwesomeIcon icon={faGithub} />
                    <p className='text-[15px]'>Github</p>
                </a>
                <a href="mailto:legalbriandev@gmail.com" target="_blank" rel="noreferrer" className={contactButton}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p className='text-[15px]'>Email</p>
                </a>
                <a href="https://wa.me/541136853167" target="_blank" rel="noreferrer" className={contactButton}>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <p className='text-[15px]'>WhatsApp</p>
                </a>
            </div>
        </div>
    );
}

export default Contact;
