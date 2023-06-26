import foto from "../images/Foto.png"
import { ReactComponent as Linkedin } from '../images/linkedin.svg';
import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as Mail } from '../images/mail.svg';
import { ReactComponent as Whatsapp } from '../images/whatsapp.svg';
import { homeBackgroud, homeContainer, homeCardContainer, homeCardImage, homeCardName, homeCardTitle, homeCardContactContainer, homeCardContactButton } from "./stylePages";

const Home = () => {

    const font = {
        fontFamily: 'Righteous'
    }
    
    return (
        <div id="home" className={homeContainer} style={homeBackgroud}>
            <div className={homeCardContainer}>
                <img src={foto} alt="" className={homeCardImage}/>
                <p className={homeCardName} style={font}>BRIAN LEGAL</p>
                <p className={homeCardTitle}>Full Stack Web Developer</p>
                <div className={homeCardContactContainer}>
                    <a href="https://www.linkedin.com/in/legal-brian/" target="_blank" rel="noreferrer" className={homeCardContactButton}>
                        <Linkedin fill="white" width="27" height="27"/>
                    </a>
                    <a href="https://github.com/LegalBrian" target="_blank" rel="noreferrer" className={homeCardContactButton}>
                        <Github fill="white" width="27" height="27"/>
                    </a>
                    <a href="mailto:legalbriandev@gmail.com" target="_blank" rel="noreferrer" className={homeCardContactButton}>
                        <Mail fill="white" width="27" height="27"/>
                    </a>
                    <a href="https://wa.me/541136853167" target="_blank" rel="noreferrer" className={homeCardContactButton}>
                        <Whatsapp fill="white" width="27" height="27"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;