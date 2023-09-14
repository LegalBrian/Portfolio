import { useState, useContext } from "react";
import logoB from "../assets/images/logo-blanco.png";
import logoN from "../assets/images/logo-negro.png";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FormattedMessage } from "react-intl";
import { langContext } from "../assets/context/langContext";
import { themeContext } from "../assets/context/themeContext";
import SwitchLang from "./SwitchLang";
import SwitchTheme from "./SwitchTheme";

const Header = () => {

    const lang = useContext(langContext);
    const theme = useContext(themeContext)

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

return (
    <div className="flex justify-between items-center p-4 text-xl">
        <a href="/">
            {
                theme.currentTheme === "dark" ?
                <img src={logoB} className="w-16 h-16" alt="Logo" />
                :
                <img src={logoN} className="w-16 h-16" alt="Logo" />
            }
        </a>
        <nav className="hidden gap-4 desktop:flex laptop:flex items-center justify-center">
            <a href="/#home" className="hover:text-azul-hover transition-all duration-500">
                <FormattedMessage id="header.home" defaultMessage="INICIO" />
            </a>
            <a href="/#skills" className="hover:text-azul-hover transition-all duration-500">                    
                <FormattedMessage id="header.skills" defaultMessage="HABILIDADES" />
            </a>
            <a href="/#resume" className="hover:text-azul-hover transition-all duration-500">
                <FormattedMessage id="header.resume" defaultMessage="CURRICULUM" />
            </a>
            <a href="/#projects" className="hover:text-azul-hover transition-all duration-500">
                <FormattedMessage id="header.projects" defaultMessage="PROYECTOS" />
            </a>
            <a href="/#contact" className="hover:text-azul-hover transition-all duration-500">
                <FormattedMessage id="header.contact" defaultMessage="CONTACTO" />
            </a>
            <SwitchLang lang={ lang }/>
            <SwitchTheme theme={theme}/>
        </nav>
        <div onClick={handleNav} className="block desktop:hidden laptop:hidden">
            {nav ? <></> : <AiOutlineMenu size={30} className="p-1 rounded-lg border-2 border-negro bg-element-light dark:border-blanco dark:bg-element-dark"/>}
        </div>
        <nav className={nav ? "fixed right-0 top-0 w-[60%] h-full bg-element-light dark:bg-element-dark ease-in-out transition-all duration-500 flex flex-col justify-center items-center gap-5 z-10" : "ease-in-out h-full top-0 fixed right-[-100%] transition-all duration-500 flex flex-col justify-center items-center gap-5"}>
            <AiOutlineClose size={30} onClick={handleNav} className="absolute top-6 right-4 self-end p-1 border-2 border-negro dark:border-blanco rounded-lg"/>
            <div className="flex flex-row gap-5">
                <SwitchLang lang={lang}/>
                <SwitchTheme theme={theme}/>
            </div>
            <a href="/#home" className="hover:text-azul-hover" onClick={handleNav}>
                <FormattedMessage id="header.home" defaultMessage="INICIO" />
            </a>
            <a href="/#skills" className="hover:text-azul-hover" onClick={handleNav}>                    
                <FormattedMessage id="header.skills" defaultMessage="HABILIDADES" />
            </a>
            <a href="/#resume" className="hover:text-azul-hover" onClick={handleNav}>
                <FormattedMessage id="header.resume" defaultMessage="CURRICULUM" />
            </a>

            <a href="/#projects" className="hover:text-azul-hover" onClick={handleNav}>
                <FormattedMessage id="header.projects" defaultMessage="PROYECTOS" />
            </a>
            <a href="/#contact" className="hover:text-azul-hover" onClick={handleNav}>
                <FormattedMessage id="header.contact" defaultMessage="CONTACTO" />
            </a>
        </nav>
    </div>
  );
};

export default Header;