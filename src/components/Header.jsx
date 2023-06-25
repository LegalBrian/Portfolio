import logoB from "../images/logo-blanco.png"
import { useState, useEffect, useContext } from "react";
import { headerButtonMenu, headerButtonMenuSvg, headerContainer, headerLangs, headerNav, headerNavClosed, headerNavOpen, headerNavOption } from "./styleComponents";
import { FormattedMessage } from "react-intl";
import { langContext } from "../context/langContext";
import { ReactComponent as Spain } from '../images/Spain.svg';
import { ReactComponent as USA } from '../images/USA.svg';

const Header = () => {

    const lang = useContext(langContext);

    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [menuOpen]);

    return(
        <header className={headerContainer}>
            <a href="/">
                <img src={logoB} className="w-16 h-16" alt="Logo" />
            </a>
            <button className={`${headerButtonMenu} ${menuOpen ? '' : ''}`} onClick={toggleMenu}>
                <span className="sr-only">Menú</span>
                <svg className={headerButtonMenuSvg} viewBox="0 0 24 24">
                    <rect x="4" y="5" width="16" height="2" />
                    <rect x="4" y="11" width="16" height="2" />
                    <rect x="4" y="17" width="16" height="2" />
                </svg>
            </button>

            <nav className={`${headerNav} ${menuOpen ? headerNavOpen : headerNavClosed}`}>
                <a onClick={toggleMenu} className="border cursor-pointer absolute top-[20px] right-0 self-end mr-[40px] border-gray-600 px-4 py-2 rounded text-white focus:outline-none desktop:hidden laptop:hidden">x</a>
                <a href={"/" + "#home"} onClick={() => setMenuOpen(false)} className={headerNavOption}>
                    <FormattedMessage id="header.home" defaultMessage="INICIO" />
                </a>
                <a href={"/" + "#about"} onClick={() => setMenuOpen(false)} className={headerNavOption}>
                    <FormattedMessage id="header.about" defaultMessage="SOBRE MÍ" />
                </a>
                <a href={"/" + "#skills"} onClick={() => setMenuOpen(false)} className={headerNavOption}>                    
                    <FormattedMessage id="header.skills" defaultMessage="HABILIDADES" />
                </a>
                <a href={"/" + "#resume"} onClick={() => setMenuOpen(false)} className={headerNavOption}>
                    <FormattedMessage id="header.resume" defaultMessage="CURRICULUM" />
                </a>
                <a href={"/" + "#projects"} onClick={() => setMenuOpen(false)} className={headerNavOption}>
                    <FormattedMessage id="header.projects" defaultMessage="PROYECTOS" />
                </a>
                <a href={"/" + "#contact"} onClick={() => setMenuOpen(false)} className={headerNavOption}>
                    <FormattedMessage id="header.contact" defaultMessage="CONTACTO" />
                </a>
            </nav>
            <div className={headerLangs}>
                    <a onClick={() => lang.setLang("es-AR")} className={`${lang.currentLang === "es-AR" ? "opacity-100 rounded-full border-[rgba(0,0,100,1)] border-[3px]" : "opacity-25"}`}>
                        <Spain width="27" height="27"/>
                    </a>

                    <a onClick={() => lang.setLang("en-US")} className={`${lang.currentLang === "en-US" ? "opacity-100 rounded-full border-[rgba(0,0,100,1)] border-[3px]" : "opacity-25"}`}>
                        <USA width="27" height="27"/>
                    </a>
                </div>
        </header>
    )
}

export default Header;