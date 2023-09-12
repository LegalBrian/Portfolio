import logoB from "../assets/images/logo-blanco.png";

const Footer = () => {
    return (
        <footer className="flex justify-center items-center py-6 text-blanco bg-negro">
            <a href="/" className="flex flex-col justify-center items-center gap-[20px]">
                <img src={logoB} alt="Logo Blanco" className="desktop:w-[180px] desktop:h-[180px] smartphone:w-[90px] smartphone:h-[90px]" />
                <p>Brian Legal Portfolio 2023</p>
            </a>
        </footer>
    );
};

export default Footer;