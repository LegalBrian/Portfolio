import logoB from "../assets/images/logo-blanco.png";
import logoN from "../assets/images/logo-negro.png";
import { useContext } from "react";
import { themeContext } from "../assets/context/themeContext";

const Footer = () => {
    
    const theme = useContext(themeContext)
    
    return (
        <footer className="flex justify-center items-center text-xl py-6 bg-element-light dark:bg-element-dark">
            <a href="/" className="flex flex-col justify-center items-center gap-[20px]">
            {
                theme.currentTheme === "dark" ?
                <img src={logoB} alt="Logo Blanco" className="desktop:w-[180px] desktop:h-[180px] smartphone:w-[90px] smartphone:h-[90px]" />
                :
                <img src={logoN} alt="Logo Blanco" className="desktop:w-[180px] desktop:h-[180px] smartphone:w-[90px] smartphone:h-[90px]" />
            }
                <p>Brian Legal Portfolio 2023</p>
            </a>
        </footer>
    );
};

export default Footer;