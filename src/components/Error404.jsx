import bg404 from "../images/404-bg.gif"

const Error404 = () => {
    
    const estilos = {
        backgroundImage: `linear-gradient(to top, rgba(150,0,0,0.3), rgba(75,0,0,0.6), rgba(0,0,0,0.9)), url(${bg404})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return(
        <div className="flex flex-col items-center justify-center h-screen" style={estilos}>
            <p className="text-[80px] text-[#ffffff] animate-pulse text-center">404 Error:</p>
            <p className="text-[80px] text-[rgba(255,75,75,1)] animate-pulse text-center">Page not found.</p>
        </div>
    )
}

export default Error404;
