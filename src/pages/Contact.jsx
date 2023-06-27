import { ReactComponent as Linkedin } from '../assets/images/linkedin.svg';
import { ReactComponent as Github } from '../assets/images/github.svg';
import { ReactComponent as Mail } from '../assets/images/mail.svg';
import { ReactComponent as Whatsapp } from '../assets/images/whatsapp.svg';
import { contactButton, contactButtonsContainer, contactContainer, contactDescription, contactTitle } from '../assets/styles/stylePages';
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
                    <Linkedin fill="white" width="27" height="27"/>
                    <p className='text-[15px]'>LinkedIn</p>
                </a>
                <a href="https://github.com/LegalBrian" target="_blank" rel="noreferrer" className={contactButton}>
                    <Github fill="white" width="27" height="27"/>
                    <p className='text-[15px]'>Github</p>
                </a>
                <a href="mailto:legalbriandev@gmail.com" target="_blank" rel="noreferrer" className={contactButton}>
                    <Mail fill="white" width="27" height="27"/>
                    <p className='text-[15px]'>Email</p>
                </a>
                <a href="https://wa.me/541136853167" target="_blank" rel="noreferrer" className={contactButton}>
                    <Whatsapp fill="white" width="27" height="27"/>
                    <p className='text-[15px]'>WhatsApp</p>
                </a>
            </div>
        </div>
    );
}

export default Contact;
