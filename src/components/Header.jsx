import logoB from "../images/logo-blanco.png"
import { useState, useEffect } from "react";

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
        <header className="text-white bg-black">
            <div className="container mx-auto flex items-center justify-between p-[5px]">
                <a href="/">
                    <img src={logoB} className="w-16 h-16" alt="Logo" />
                </a>
                <button className={`border border-gray-600 px-3 py-2 rounded text-gray-600 hover:text-gray-800 focus:outline-none desktop:hidden laptop:hidden tablet:hidden ${menuOpen ? '' : ''}`} onClick={toggleMenu}>
                    <span className="sr-only">Menú</span>
                    <svg className="w-6 h-6 fill-[#ffffff]" viewBox="0 0 24 24">
                        <rect x="4" y="5" width="16" height="2" />
                        <rect x="4" y="11" width="16" height="2" />
                        <rect x="4" y="17" width="16" height="2" />
                    </svg>
                </button>
                <nav className={`text-lg desktop:block laptop:block tablet:block ${menuOpen ? 'fixed inset-0 bg-black z-50 text-white flex flex-col justify-center items-center w-screen h-screen gap-[20px]' : 'hidden'}`}>
                    <a href={"/" + "#home"} onClick={() => setMenuOpen(false)} className="px-4 py-2 hover:text-blue-500 transition duration-500">HOME</a>
                    <a href={"/" + "#about"} onClick={() => setMenuOpen(false)} className="px-4 py-2 hover:text-blue-500 transition duration-500">ABOUT ME</a>
                    <a href={"/" + "#skills"} onClick={() => setMenuOpen(false)} className="px-4 py-2 hover:text-blue-500 transition duration-500">SKILLS</a>
                    <a href={"/" + "#resume"} onClick={() => setMenuOpen(false)} className="px-4 py-2 hover:text-blue-500 transition duration-500">RESUME</a>
                    <a href={"/" + "#projects"} onClick={() => setMenuOpen(false)} className="px-4 py-2 hover:text-blue-500 transition duration-500">PROJECTS</a>
                    <a href={"/" + "#contact"} onClick={() => setMenuOpen(false)} className="px-4 py-2 hover:text-blue-500 transition duration-500">CONTACT</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;