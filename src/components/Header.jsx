import logoB from "../images/logo-blanco.png"
import { useState, useContext } from "react";
import { headerLangs, headerNavOption } from "./styleComponents";
import { FormattedMessage } from "react-intl";
import { langContext } from "../context/langContext";
import { ReactComponent as Spain } from '../images/Spain.svg';
import { ReactComponent as USA } from '../images/USA.svg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

    const lang = useContext(langContext);
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

return (
    <div className='flex justify-between items-center h-[80px] px-4 text-white bg-[rgba(0,0,0,1)]'>
        <a href="/">
            <img src={logoB} className="w-16 h-16" alt="Logo" />
        </a>
        <nav className='hidden desktop:flex laptop:flex'>
            <a href={"/" + "#home"} className={headerNavOption}>
                <FormattedMessage id="header.home" defaultMessage="INICIO" />
            </a>
            <a href={"/" + "#about"} className={headerNavOption}>
                <FormattedMessage id="header.about" defaultMessage="SOBRE MÍ" />
            </a>
            <a href={"/" + "#skills"} className={headerNavOption}>                    
                <FormattedMessage id="header.skills" defaultMessage="HABILIDADES" />
            </a>
            <a href={"/" + "#resume"} className={headerNavOption}>
                <FormattedMessage id="header.resume" defaultMessage="CURRICULUM" />
            </a>
            <a href={"/" + "#projects"} className={headerNavOption}>
                <FormattedMessage id="header.projects" defaultMessage="PROYECTOS" />
            </a>
            <a href={"/" + "#contact"} className={headerNavOption}>
                <FormattedMessage id="header.contact" defaultMessage="CONTACTO" />
            </a>
            <div className={headerLangs}>
                <a onClick={() => lang.setLang("es-AR")} className={`${lang.currentLang === "es-AR" ? "opacity-100 rounded-full border-[rgba(0,0,100,1)] border-[3px]" : "opacity-25"}`}>
                    <Spain width="27" height="27"/>
                </a>
                <a onClick={() => lang.setLang("en-US")} className={`${lang.currentLang === "en-US" ? "opacity-100 rounded-full border-[rgba(0,0,100,1)] border-[3px]" : "opacity-25"}`}>
                    <USA width="27" height="27"/>
                </a>
            </div>
        </nav>
        <div onClick={handleNav} className='block desktop:hidden laptop:hidden'>
            {nav ? <></> : <AiOutlineMenu size={30} className="p-[5px] border-[1px] border-white rounded-[6px]"/>}
        </div>
        <nav className={nav ? 'fixed right-0 top-0 w-[60%] h-full border-l border-l-gray-900 bg-[#000300] ease-in-out duration-1000 flex flex-col justify-center items-center' : 'ease-in-out h-full top-0 duration-1000 fixed right-[-100%] flex flex-col justify-center items-center'}>
            <AiOutlineClose size={30} onClick={handleNav} className="absolute top-[25px] right-[15px] self-end p-[5px] border-[1px] border-white rounded-[6px]"/>
            <a href={"/" + "#home"} className={headerNavOption} onClick={handleNav}>
                <FormattedMessage id="header.home" defaultMessage="INICIO" />
            </a>
            <a href={"/" + "#about"} className={headerNavOption} onClick={handleNav}>
                <FormattedMessage id="header.about" defaultMessage="SOBRE MÍ" />
            </a>
            <a href={"/" + "#skills"} className={headerNavOption} onClick={handleNav}>                    
                <FormattedMessage id="header.skills" defaultMessage="HABILIDADES" />
            </a>
            <a href={"/" + "#resume"} className={headerNavOption} onClick={handleNav}>
                <FormattedMessage id="header.resume" defaultMessage="CURRICULUM" />
            </a>
            <a href={"/" + "#projects"} className={headerNavOption} onClick={handleNav}>
                <FormattedMessage id="header.projects" defaultMessage="PROYECTOS" />
            </a>
            <a href={"/" + "#contact"} className={headerNavOption} onClick={handleNav}>
                <FormattedMessage id="header.contact" defaultMessage="CONTACTO" />
            </a>
            <div className={headerLangs}>
                <a onClick={() => lang.setLang("es-AR")} className={`${lang.currentLang === "es-AR" ? "opacity-100 rounded-full border-[rgba(0,0,100,1)] border-[3px]" : "opacity-25"}`}>
                    <Spain width="27" height="27"/>
                </a>
                <a onClick={() => lang.setLang("en-US")} className={`${lang.currentLang === "en-US" ? "opacity-100 rounded-full border-[rgba(0,0,100,1)] border-[3px]" : "opacity-25"}`}>
                    <USA width="27" height="27"/>
                </a>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;