import foto from "../images/Foto.png"
import inicioBg from '../images/Inicio-bg.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Home = () => {

    const font = {
        fontFamily: 'Righteous'
    }

    const estilos = {
        backgroundImage: `linear-gradient(to top, rgba(75,75,255,0.3), rgba(0,0,25,0.7), rgba(0,0,0,0.9)), url(${inicioBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    
    return (
        <div className="flex  justify-evenly items-center desktop:flex-row smartphone:flex-col" style={estilos} id="home">
            <div className="bg-[rgba(0,0,25,0.7)] p-[30px] m-[20px] rounded-[40px] text-[#ffffff] flex flex-col items-center justify-center">
                <img src={foto} className=" rounded-full border border-[rgba(0,0,75,1)] border-[10px] desktop:h-[300px] desktop:w-[300px] smartphone:w-[200px] smartphone:h-[200px]"/>
                <p className="text-center mt-[20px] desktop:text-[40px] smartphone:text-[30px]" style={font}>BRIAN LEGAL</p>
                <p className="text-[20px] text-center">Full Stack Developer</p>
                <div className="flex flex-row justify-around mt-[20px] gap-[5px]">
                    <a href="https://www.linkedin.com/in/legal-brian/" target="_blank" className="flex justify-center items-center text-[#ffffff] text-[27px] w-[50px] h-[50px] bg-[rgba(0,0,0,0.7)] rounded-full border-[#ffffff] border-[2px] hover:bg-[rgba(75,75,255,1)] transition duration-500"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://github.com/LegalBrian" target="_blank" className="flex justify-center items-center text-[#ffffff] text-[27px] w-[50px] h-[50px] bg-[rgba(0,0,0,0.7)] rounded-full border-[#ffffff] border-[2px] hover:bg-[rgba(75,75,255,1)] transition duration-500"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="mailto:brianlegal11@gmail.com" target="_blank" className="flex justify-center items-center text-[#ffffff] text-[27px] w-[50px] h-[50px] bg-[rgba(0,0,0,0.7)] rounded-full border-[#ffffff] border-[2px] hover:bg-[rgba(75,75,255,1)] transition duration-500"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href="https://wa.me/541136853167" target="_blank" className="flex justify-center items-center text-[#ffffff] text-[27px] w-[50px] h-[50px] bg-[rgba(0,0,0,0.7)] rounded-full border-[#ffffff] border-[2px] hover:bg-[rgba(75,75,255,1)] transition duration-500"><FontAwesomeIcon icon={faWhatsapp} /></a>
                </div>
            </div>
        </div>
    )
}

export default Home;