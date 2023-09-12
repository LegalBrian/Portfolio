import foto from "../assets/images/Foto.png"
import { ReactComponent as Linkedin } from '../assets/images/linkedin.svg';
import { ReactComponent as Github } from '../assets/images/github.svg';
import { ReactComponent as Mail } from '../assets/images/mail.svg';
import { ReactComponent as Whatsapp } from '../assets/images/whatsapp.svg';

import inicioBg from '../assets/images/Inicio-bg.gif';

//----------------------------------------------------------------------------------------------------------------------------------------
// Home

const homeBackground = {
    backgroundImage: `linear-gradient(to top, rgba(75,75,255,0.3), rgba(0,0,25,0.7), rgba(0,0,0,0.9)), url(${inicioBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

const Home = () => {

    const font = {
        fontFamily: 'Righteous'
    }
    
    return (
        <div id="home" className="flex flex-col justify-evenly items-center" style={homeBackground}>
            <div className="flex flex-col items-center justify-center bg-negro-t rounded-[40px] p-[20px] my-[20px] text-blanco gap-[10px]">
                <img src={foto} alt="" className="rounded-full border-azul-negro border-[10px] desktop:h-[250px] desktop:w-[250px] smartphone:w-[200px] smartphone:h-[200px]"/>
                <p className="text-center desktop:text-[40px] smartphone:text-[30px]" style={font}>BRIAN LEGAL</p>
                <p className="text-center text-[20px]">Full Stack Web Developer</p>
                <div className="flex flex-row justify-around w-full">
                    <a href="https://www.linkedin.com/in/legal-brian/" target="_blank" rel="noreferrer" className="flex justify-center items-center bg-negro-t rounded-full border-[2px] border-blanco hover:bg-azul-hover duration-500 desktop:text-[25px] desktop:w-[50px] desktop:h-[50px] smartphone:text-[20px] smartphone:w-[40px] smartphone:h-[40px]">
                        <Linkedin fill="white" width="27" height="27"/>
                    </a>
                    <a href="https://github.com/LegalBrian" target="_blank" rel="noreferrer" className="flex justify-center items-center bg-negro-t rounded-full border-[2px] border-blanco hover:bg-azul-hover duration-500 desktop:text-[25px] desktop:w-[50px] desktop:h-[50px] smartphone:text-[20px] smartphone:w-[40px] smartphone:h-[40px]">
                        <Github fill="white" width="27" height="27"/>
                    </a>
                    <a href="mailto:legalbriandev@gmail.com" target="_blank" rel="noreferrer" className="flex justify-center items-center bg-negro-t rounded-full border-[2px] border-blanco hover:bg-azul-hover duration-500 desktop:text-[25px] desktop:w-[50px] desktop:h-[50px] smartphone:text-[20px] smartphone:w-[40px] smartphone:h-[40px]">
                        <Mail fill="white" width="27" height="27"/>
                    </a>
                    <a href="https://wa.me/541136853167" target="_blank" rel="noreferrer" className="flex justify-center items-center bg-negro-t rounded-full border-[2px] border-blanco hover:bg-azul-hover duration-500 desktop:text-[25px] desktop:w-[50px] desktop:h-[50px] smartphone:text-[20px] smartphone:w-[40px] smartphone:h-[40px]">
                        <Whatsapp fill="white" width="27" height="27"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;