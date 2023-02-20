import foto from "../images/Foto.png"
import inicioBg from '../images/Inicio-bg.jpg';

const Inicio = () => {

    const estilos = {
        backgroundImage: `url(${inicioBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    
    return (
        <div className="flex justify-center items-center brightness-75" style={estilos}>
            <div className="bg-[rgba(37,51,66,0.7)] px-[20px] py-[50px] m-[20px] rounded-[40px] text-[#ffffff] brightness-200">
                <img src={foto} className="h-[280px] w-[280px] rounded-full"/>
                <p className="text-[40px] text-center">Brian Legal</p>
                <p className="text-[25px] text-center">Full Stack Developer</p>
            </div>
        </div>
    )
}

export default Inicio