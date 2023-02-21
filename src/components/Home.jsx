import foto from "../images/Foto.png"
import inicioBg from '../images/Inicio-bg.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {

    const estilos = {
        backgroundImage: `linear-gradient(to top, rgba(75,75,255,0.3), rgba(0,0,25,0.7), rgba(0,0,0,0.9)), url(${inicioBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    
    return (
        <div className="flex flex-row justify-evenly items-center" style={estilos} id="home">
            <div>
                <p className="text-[80px] text-[#ffffff] font-serif" >Welcome to my</p>
                <p className="text-[80px] text-[rgba(100,100,255,1.0)] font-serif">Portfolio!!!</p>
            </div>
            <div className="bg-[rgba(0,0,25,0.7)] p-[30px] m-[20px] rounded-[40px] text-[#ffffff]">
                <img src={foto} className="h-[300px] w-[300px] rounded-full border border-[rgba(0,0,125,0.6)] border-[10px]"/>
                <p className="text-[40px] text-center mt-[20px] font-bold">BRIAN LEGAL</p>
                <p className="text-[20px] text-center font-bold">Full Stack Developer</p>
                <div className="flex flex-row justify-around mt-[20px]">
                    <a href="https://www.linkedin.com/in/legal-brian/" target="_blank" className="flex justify-center items-center text-[#ffffff] text-[27px] w-[50px] h-[50px] bg-[rgba(0,0,0,0.7)] rounded-full border-[#ffffff] border-[2px] hover:bg-[rgba(75,75,255,0.7)] transition duration-500"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://github.com/LegalBrian" target="_blank" className="flex justify-center items-center text-[#ffffff] text-[27px] w-[50px] h-[50px] bg-[rgba(0,0,0,0.7)] rounded-full border-[#ffffff] border-[2px] hover:bg-[rgba(75,75,255,0.7)] transition duration-500"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
        </div>
    )
}

export default Home;