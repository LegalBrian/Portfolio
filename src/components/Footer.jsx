import logoB from "../images/logo-blanco.png"

const Footer = () => {
    return(
        <footer class="text-white bg-[rgba(0,0,0,1)]">
            <div class="container mx-auto py-6 flex justify-center items-center">
                <a href="#" className="flex flex-col justify-center items-center gap-[20px]">
                    <img id="logoPoke" src={logoB} className="desktop:w-[180px] desktop:h-[180px] smartphone:w-[90px] smartphone:h-[90px]"/>
                    <p>Brian Legal Portfolio 2023</p>
                </a>
            </div>
        </footer>
    )
}

export default Footer;