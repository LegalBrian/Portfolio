import logoB from "../images/logo-blanco.png"
import { useState, useEffect, useContext } from "react";
import { headerButtonMenu, headerButtonMenuSvg, headerContainer, headerNav, headerNavClosed, headerNavOpen, headerNavOption } from "./styleComponents";
import { FormattedMessage } from "react-intl";
import { langContext } from "../context/langContext";

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
                <a onClick={() => lang.setLang("es-AR")} className={headerNavOption}>E</a>
                <a onClick={() => lang.setLang("en-US")} className={headerNavOption}>I</a>
            </nav>
        </header>
    )
}

export default Header;