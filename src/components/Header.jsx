import { Link } from "react-router-dom";
import logoB from "../images/logo-blanco.png"

const Header = () => {
    return(
        <header class="text-[#ffffff] bg-[rgba(0,0,0,1)]">
            <div class="container mx-auto flex items-center justify-between py-4">
                <Link to='/'>
                    <img id="logoPoke" src={logoB} className="w-[70px] h-[70px]"/>
                </Link>
                <nav class="text-lg">
                    <a href="#home" class="px-4 py-2 hover:text-[rgba(75,75,255,1)] transition duration-500">HOME</a>
                    <a href="#about" class="px-4 py-2 hover:text-[rgba(75,75,255,1)] transition duration-500">ABOUT ME</a>
                    <a href="#skills" class="px-4 py-2 hover:text-[rgba(75,75,255,1)] transition duration-500">SKILLS</a>
                    <a href="#resume" class="px-4 py-2 hover:text-[rgba(75,75,255,1)] transition duration-500">RESUME</a>
                    <a href="#proyects" class="px-4 py-2 hover:text-[rgba(75,75,255,1)] transition duration-500">PROYECTS</a>
                    <a href="#contact" class="px-4 py-2 hover:text-[rgba(75,75,255,1)] transition duration-500">CONTACT</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;