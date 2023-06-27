import logoB from "../assets/images/logo-blanco.png";
import { footerButton, footerButtonImage, footerContainer } from "../assets/styles/styleComponents";

const Footer = () => {
    return (
        <footer className={footerContainer}>
            <a href="/" className={footerButton}>
                <img src={logoB} alt="Logo Blanco" className={footerButtonImage} />
                <p>Brian Legal Portfolio 2023</p>
            </a>
        </footer>
    );
};

export default Footer;