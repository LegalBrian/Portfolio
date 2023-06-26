import logoB from "../images/logo-blanco.png"
import { useState, useContext } from "react";
import { headerContainer, headerDesktop, headerLangs, headerNavOption, headerSmartphone, headerSmartphoneOpenButton, headerSmartphoneCloseButton, headerSmartphoneOpen, headerSmartphoneClose, headerButtonLangActive } from "./styleComponents";
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
    <div className={headerContainer}>
        <a href="/">
            <img src={logoB} className="w-16 h-16" alt="Logo" />
        </a>
        <nav className={headerDesktop}>
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
                <a onClick={() => lang.setLang("es-AR")} className={`${lang.currentLang === "es-AR" ? headerButtonLangActive : "opacity-25"}`}>
                    <Spain width="27" height="27"/>
                </a>
                <a onClick={() => lang.setLang("en-US")} className={`${lang.currentLang === "en-US" ? headerButtonLangActive : "opacity-25"}`}>
                    <USA width="27" height="27"/>
                </a>
            </div>
        </nav>
        <div onClick={handleNav} className={headerSmartphone}>
            {nav ? <></> : <AiOutlineMenu size={30} className={headerSmartphoneOpenButton}/>}
        </div>
        <nav className={nav ? headerSmartphoneOpen : headerSmartphoneClose}>
            <AiOutlineClose size={30} onClick={handleNav} className={headerSmartphoneCloseButton}/>
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
                <a onClick={() => lang.setLang("es-AR")} className={`${lang.currentLang === "es-AR" ? headerButtonLangActive : "opacity-25"}`}>
                    <Spain width="27" height="27"/>
                </a>
                <a onClick={() => lang.setLang("en-US")} className={`${lang.currentLang === "en-US" ? headerButtonLangActive : "opacity-25"}`}>
                    <USA width="27" height="27"/>
                </a>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;