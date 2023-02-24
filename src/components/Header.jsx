import logoB from "../images/logo-blanco.png"
import { useState } from "react";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <header class="text-white bg-black">
            <div class="container mx-auto flex items-center justify-between py-4">
                <a href="/">
                    <img id="logoPoke" src={logoB} class="w-16 h-16" alt="Logo" />
                </a>
                <button className="block border border-gray-600 px-3 py-2 rounded text-gray-600 hover:text-gray-800 focus:outline-none desktop:hidden" onClick={toggleMenu}>
                    <span className="sr-only">Menú</span>
                    <svg className="w-6 h-6 fill-[#ffffff]" viewBox="0 0 24 24">
                        <rect x="4" y="5" width="16" height="2" />
                        <rect x="4" y="11" width="16" height="2" />
                        <rect x="4" y="17" width="16" height="2" />
                    </svg>
                </button>
                <nav className={`${menuOpen ? "block" : "hidden"} desktop:hidden`}>
                    <a href="#home" class="block mt-4 md:inline-block text-[#ffffff] hover:text-blue-500 mr-4">HOME</a>
                    <a href="#about" class="block mt-4 md:inline-block text-[#ffffff] hover:text-blue-500 mr-4">ABOUT ME</a>
                    <a href="#skills" class="block mt-4 md:inline-block text-[#ffffff] hover:text-blue-500 mr-4">SKILLS</a>
                    <a href="#resume" class="block mt-4 md:inline-block text-[#ffffff] hover:text-blue-500 mr-4">RESUME</a>
                    <a href="#projects" class="block mt-4 md:inline-block text-[#ffffff] hover:text-blue-500 mr-4">PROJECTS</a>
                    <a href="#contact" class="block mt-4 md:inline-block text-[#ffffff] hover:text-blue-500 mr-4">CONTACT</a>
                </nav>
                <nav class="text-lg">
                    <a href="#home" class="px-4 py-2 hover:text-blue-500 transition duration-500">HOME</a>
                    <a href="#about" class="px-4 py-2 hover:text-blue-500 transition duration-500">ABOUT ME</a>
                    <a href="#skills" class="px-4 py-2 hover:text-blue-500 transition duration-500">SKILLS</a>
                    <a href="#resume" class="px-4 py-2 hover:text-blue-500 transition duration-500">RESUME</a>
                    <a href="#projects" class="px-4 py-2 hover:text-blue-500 transition duration-500">PROJECTS</a>
                    <a href="#contact" class="px-4 py-2 hover:text-blue-500 transition duration-500">CONTACT</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;