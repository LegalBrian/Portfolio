const Footer = () => {
    return(
        <footer class="bg-[#232226] text-white">
            <div class="container mx-auto py-6 flex justify-between items-center">
                <div class="logo text-xl font-bold">
                My Website
                </div>
                <div class="social-links">
                    <a href="#" class="text-lg mr-4 hover:text-gray-500"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="text-lg mr-4 hover:text-gray-500"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-lg hover:text-gray-500"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;