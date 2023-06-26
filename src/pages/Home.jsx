import foto from "../images/Foto.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
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
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <a href="https://github.com/LegalBrian" target="_blank" rel="noreferrer" className={homeCardContactButton}>
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <a href="mailto:legalbriandev@gmail.com" target="_blank" rel="noreferrer" className={homeCardContactButton}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                    <a href="https://wa.me/541136853167" target="_blank" rel="noreferrer" className={homeCardContactButton}>
                        <FontAwesomeIcon icon={faWhatsapp}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;