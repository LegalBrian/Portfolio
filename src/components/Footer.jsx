import logoB from "../images/logo-blanco.png"

const Footer = () => {
    return(
        <footer class="text-white bg-[rgba(0,0,0,1)]">
            <div class="container mx-auto py-6 flex justify-center items-center">
                <a href="#" className="flex flex-col justify-center items-center gap-[20px]">
                    <img id="logoPoke" src={logoB} className="w-[180px] h-[180px]"/>
                    <p>Brian Legal Portfolio 2023</p>
                </a>
            </div>
        </footer>
    )
}

export default Footer;