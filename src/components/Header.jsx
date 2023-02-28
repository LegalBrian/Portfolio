import logoB from "../images/logo-blanco.png"
import { useState, useEffect } from "react";
import { headerButtonMenu, headerButtonMenuSvg, headerContainer, headerNav, headerNavClosed, headerNavOpen, headerNavOption } from "./styleComponents";

const Header = () => {

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
                <a href={"/" + "#home"} onClick={() => setMenuOpen(false)} className={headerNavOption}>HOME</a>
                <a href={"/" + "#about"} onClick={() => setMenuOpen(false)} className={headerNavOption}>ABOUT ME</a>
                <a href={"/" + "#skills"} onClick={() => setMenuOpen(false)} className={headerNavOption}>SKILLS</a>
                <a href={"/" + "#resume"} onClick={() => setMenuOpen(false)} className={headerNavOption}>RESUME</a>
                <a href={"/" + "#projects"} onClick={() => setMenuOpen(false)} className={headerNavOption}>PROJECTS</a>
                <a href={"/" + "#contact"} onClick={() => setMenuOpen(false)} className={headerNavOption}>CONTACT</a>
            </nav>
        </header>
    )
}

export default Header;