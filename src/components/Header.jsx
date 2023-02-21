const Header = () => {
    return(
        <header class="text-white bg-[rgba(0,0,0,1)]">
            <div class="container mx-auto flex items-center justify-between py-4">
                <div class="logo text-xl font-bold">My Website</div>
                <nav class="text-lg">
                    <a href="#" class="px-4 py-2 hover:bg-[#253342] rounded-xl">HOME</a>
                    <a href="#" class="px-4 py-2 hover:bg-[#253342] rounded-xl">ABOUT ME</a>
                    <a href="#" class="px-4 py-2 hover:bg-[#253342] rounded-xl">SKILLS</a>
                    <a href="#" class="px-4 py-2 hover:bg-[#253342] rounded-xl">RESUME</a>
                    <a href="#" class="px-4 py-2 hover:bg-[#253342] rounded-xl">PROYECTS</a>
                    <a href="#" class="px-4 py-2 hover:bg-[#253342] rounded-xl">CONTACT</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;