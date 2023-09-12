import logoB from "../assets/images/logo-blanco.png"
import { useState, useContext } from "react";
import { FormattedMessage } from "react-intl";
import { langContext } from "../assets/context/langContext";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import SwitchLang from "./SwitchLang";

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
            <SwitchLang lang={ lang }/>
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
            <SwitchLang lang={lang} />
        </nav>
    </div>
  );
};

export default Header;