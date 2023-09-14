import { ReactComponent as Linkedin } from '../assets/images/Linkedin.svg';
import { ReactComponent as Github } from '../assets/images/Github.svg';
import { ReactComponent as Mail } from '../assets/images/Mail.svg';
import { ReactComponent as Whatsapp } from '../assets/images/Whatsapp.svg';
import { FormattedMessage } from 'react-intl';
import ContactForm from '../components/ContactForm';
import Button from '../components/Button';


const Contact = () => {
    return (
        <div id="contact" className="flex flex-col justify-center items-center text-center gap-5">
            <h2 className="text-4xl">
                <FormattedMessage 
                    id="contact.title" 
                    defaultMessage="Contacto" 
                />
            </h2>
            <p className="text-2xl px-5">
                <FormattedMessage 
                    id="contact.description" 
                    defaultMessage="Si estás interesado en mi trabajo y te gustaría discutir una posible colaboración, no dudes en visitar mis perfiles profesionales en LinkedIn y GitHub para obtener más información sobre mi experiencia y habilidades. También puedes contactarme por correo electrónico o WhatsApp para hablar sobre un proyecto o una oportunidad laboral. ¡Espero tener noticias tuyas pronto y trabajar juntos en el futuro!" 
                />
            </p>
            <div className="flex justify-evenly gap-5 mx-5 desktop:flex-row smartphone:flex-wrap">
                <Button 
                    Href={"https://www.linkedin.com/in/legal-brian/"} 
                    TextId={"contact.linkedin"} 
                    defaultMessage={"LinkedIn"} 
                    Svg={Linkedin} 
                    SvgS={"20"} 
                    SvgF={"white"}
                />
                <Button 
                    Href={"https://github.com/LegalBrian"} 
                    TextId={"contact.github"} 
                    defaultMessage={"GitHub"} 
                    Svg={Github} 
                    SvgS={"20"} 
                    SvgF={"white"}
                />
                <Button 
                    Href={"mailto:legalbriandev@gmail.com"} 
                    TextId={"contact.email"} 
                    defaultMessage={"Email"} 
                    Svg={Mail} 
                    SvgS={"20"} 
                    SvgF={"white"}
                />
                <Button 
                    Href={"https://wa.me/541136853167"} 
                    TextId={"contact.whatsapp"} 
                    defaultMessage={"WhatsApp"} 
                    Svg={Whatsapp} 
                    SvgS={"20"} 
                    SvgF={"white"}
                />
            </div>
            <ContactForm />
        </div>
    );
}

export default Contact;
