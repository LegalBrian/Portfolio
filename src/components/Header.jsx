const Header = () => {
    return(
        <header class="text-white bg-[#232226]">
            <div class="container mx-auto flex items-center justify-between py-4">
                <div class="logo text-xl font-bold">My Website</div>
                <nav class="text-lg">
                    <a href="#" class="px-4 py-2 hover:bg-[#253342] rounded-xl">INICIO</a>
                    <a href="#" class="px-4 py-2 hover:bg-[#253342] rounded-xl">SOBRE MI</a>
                    <a href="#" class="px-4 py-2 hover:bg-[#253342] rounded-xl">SKILLS</a>
                    <a href="#" class="px-4 py-2 hover:bg-[#253342] rounded-xl">CURRICULUM</a>
                    <a href="#" class="px-4 py-2 hover:bg-[#253342] rounded-xl">PROYECTOS</a>
                    <a href="#" class="px-4 py-2 hover:bg-[#253342] rounded-xl">CONTACTO</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;