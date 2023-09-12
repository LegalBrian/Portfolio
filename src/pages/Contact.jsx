import { ReactComponent as Linkedin } from '../assets/images/linkedin.svg';
import { ReactComponent as Github } from '../assets/images/github.svg';
import { ReactComponent as Mail } from '../assets/images/mail.svg';
import { ReactComponent as Whatsapp } from '../assets/images/whatsapp.svg';
import { FormattedMessage } from 'react-intl';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div id="contact" className="flex flex-col justify-center items-center bg-negro-azul text-blanco text-center py-[20px] gap-[10px] desktop:px-[40px] smartphone:px-[20px]">
            <h2 className="desktop:text-[40px] smartphone:text-[30px]">
                <FormattedMessage 
                    id="contact.title" 
                    defaultMessage="Contacto" 
                />
            </h2>
            <p className="desktop:text-[20px] smartphone:text-[15px]">
                <FormattedMessage 
                    id="contact.description" 
                    defaultMessage="Si estás interesado en mi trabajo y te gustaría discutir una posible colaboración, no dudes en visitar mis perfiles profesionales en LinkedIn y GitHub para obtener más información sobre mi experiencia y habilidades. También puedes contactarme por correo electrónico o WhatsApp para hablar sobre un proyecto o una oportunidad laboral. ¡Espero tener noticias tuyas pronto y trabajar juntos en el futuro!" 
                />
            </p>
            <div className="flex desktop:flex-row justify-evenly smartphone:flex-wrap gap-[20px]">
                <a href="https://www.linkedin.com/in/legal-brian/" target="_blank" rel="noreferrer" className="flex flex-row justify-evenly items-center text-[25px] w-[150px] h-[50px] bg-negro rounded-full border-blanco border-[2px] hover:bg-azul-hover transition duration-500">
                    <Linkedin fill="white" width="27" height="27"/>
                    <p className='text-[15px]'>LinkedIn</p>
                </a>
                <a href="https://github.com/LegalBrian" target="_blank" rel="noreferrer" className="flex flex-row justify-evenly items-center text-[25px] w-[150px] h-[50px] bg-negro rounded-full border-blanco border-[2px] hover:bg-azul-hover transition duration-500">
                    <Github fill="white" width="27" height="27"/>
                    <p className='text-[15px]'>Github</p>
                </a>
                <a href="mailto:legalbriandev@gmail.com" target="_blank" rel="noreferrer" className="flex flex-row justify-evenly items-center text-[25px] w-[150px] h-[50px] bg-negro rounded-full border-blanco border-[2px] hover:bg-azul-hover transition duration-500">
                    <Mail fill="white" width="27" height="27"/>
                    <p className='text-[15px]'>Email</p>
                </a>
                <a href="https://wa.me/541136853167" target="_blank" rel="noreferrer" className="flex flex-row justify-evenly items-center text-[25px] w-[150px] h-[50px] bg-negro rounded-full border-blanco border-[2px] hover:bg-azul-hover transition duration-500">
                    <Whatsapp fill="white" width="27" height="27"/>
                    <p className='text-[15px]'>WhatsApp</p>
                </a>
            </div>
            <ContactForm />
        </div>
    );
}

export default Contact;
