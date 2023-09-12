import logoB from "../assets/images/logo-blanco.png"
import { useState, useContext } from "react";
import { FormattedMessage } from "react-intl";
import { langContext } from "../assets/context/langContext";
import { ReactComponent as Spain } from '../assets/images/Spain.svg';
import { ReactComponent as USA } from '../assets/images/USA.svg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {

    const lang = useContext(langContext);
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

return (
    <div className="flex justify-between items-center h-[80px] px-4 text-blanco bg-negro">
        <a href="/">
            <img src={logoB} className="w-16 h-16" alt="Logo" />
        </a>
        <nav className="hidden desktop:flex laptop:flex items-center justify-center">
            <a href="/#home" className="px-4 py-2 hover:text-azul-hover transition duration-500">
                <FormattedMessage id="header.home" defaultMessage="INICIO" />
            </a>
            <a href="/#about" className="px-4 py-2 hover:text-azul-hover transition duration-500">
                <FormattedMessage id="header.about" defaultMessage="SOBRE MÍ" />
            </a>
            <a href="/#skills" className="px-4 py-2 hover:text-azul-hover transition duration-500">                    
                <FormattedMessage id="header.skills" defaultMessage="HABILIDADES" />
            </a>
            <a href="/#resume" className="px-4 py-2 hover:text-azul-hover transition duration-500">
                <FormattedMessage id="header.resume" defaultMessage="CURRICULUM" />
            </a>
            <a href="/#projects" className="px-4 py-2 hover:text-azul-hover transition duration-500">
                <FormattedMessage id="header.projects" defaultMessage="PROYECTOS" />
            </a>
            <a href="/#contact" className="px-4 py-2 hover:text-azul-hover transition duration-500">
                <FormattedMessage id="header.contact" defaultMessage="CONTACTO" />
            </a>
            <div className="flex justify-center items-center gap-[10px] border-[1px] border-blanco rounded-[5px] p-[5px]">
                <FormattedMessage className="px-4 py-2 hover:text-azul-hover transition duration-500" id="header.langOption" defaultMessage="IDIOMA" />
                <div className="flex justify-center items-center gap-[10px]">
                    <button onClick={() => lang.setLang("es-AR")} className={`${lang.currentLang === "es-AR" ? "opacity-100 rounded-full border-azul-oscuro border-[3px]" : "opacity-25"}`}>
                        <Spain width="27" height="27"/>
                    </button>
                    <button onClick={() => lang.setLang("en-US")} className={`${lang.currentLang === "en-US" ? "opacity-100 rounded-full border-azul-oscuro border-[3px]" : "opacity-25"}`}>
                        <USA width="27" height="27"/>
                    </button>
                </div>
            </div>
        </nav>
        <div onClick={handleNav} className="block desktop:hidden laptop:hidden">
            {nav ? <></> : <AiOutlineMenu size={30} className="p-[5px] border-[1px] border-blanco rounded-[6px]"/>}
        </div>
        <nav className={nav ? "fixed right-0 top-0 w-[60%] h-full bg-negro ease-in-out duration-1000 flex flex-col justify-center items-center gap-[15px] z-10" : "ease-in-out h-full top-0 duration-1000 fixed right-[-100%] flex flex-col justify-center items-center gap-[15px]"}>
            <AiOutlineClose size={30} onClick={handleNav} className="absolute top-[25px] right-[15px] self-end p-[5px] border-[1px] border-blanco rounded-[6px]"/>
            <a href="/#home" className="px-4 py-2 hover:text-azul-hover transition duration-500" onClick={handleNav}>
                <FormattedMessage id="header.home" defaultMessage="INICIO" />
            </a>
            <a href="/#about" className="px-4 py-2 hover:text-azul-hover transition duration-500" onClick={handleNav}>
                <FormattedMessage id="header.about" defaultMessage="SOBRE MÍ" />
            </a>
            <a href="/#skills" className="px-4 py-2 hover:text-azul-hover transition duration-500" onClick={handleNav}>                    
                <FormattedMessage id="header.skills" defaultMessage="HABILIDADES" />
            </a>
            <a href="/#resume" className="px-4 py-2 hover:text-azul-hover transition duration-500" onClick={handleNav}>
                <FormattedMessage id="header.resume" defaultMessage="CURRICULUM" />
            </a>
            <a href="/#projects" className="px-4 py-2 hover:text-azul-hover transition duration-500" onClick={handleNav}>
                <FormattedMessage id="header.projects" defaultMessage="PROYECTOS" />
            </a>
            <a href="/#contact" className="px-4 py-2 hover:text-azul-hover transition duration-500" onClick={handleNav}>
                <FormattedMessage id="header.contact" defaultMessage="CONTACTO" />
            </a>
            <div className="flex flex-col justify-center items-center gap-[5px]">
                <FormattedMessage className="px-4 py-2 hover:text-azul-hover transition duration-500" id="header.langOption" defaultMessage="IDIOMA" />
                <div className="flex justify-center items-center gap-[10px]">
                    <button onClick={() => lang.setLang("es-AR")} className={`${lang.currentLang === "es-AR" ? "opacity-100 rounded-full border-azul-oscuro border-[3px]" : "opacity-25"}`}>
                        <Spain width="27" height="27"/>
                    </button>
                    <button onClick={() => lang.setLang("en-US")} className={`${lang.currentLang === "en-US" ? "opacity-100 rounded-full border-azul-oscuro border-[3px]" : "opacity-25"}`}>
                        <USA width="27" height="27"/>
                    </button>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default Header;