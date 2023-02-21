import foto from "../images/Foto.png"
import inicioBg from '../images/Inicio-bg.gif';

const Home = () => {

    const estilos = {
        backgroundImage: `linear-gradient(to top, rgba(75,75,255,0.3), rgba(0,0,25,0.7), rgba(0,0,0,0.9)), url(${inicioBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    
    return (
        <div className="flex justify-center items-center" style={estilos}>
            <div className="bg-[rgba(0,0,25,0.7)] px-[20px] py-[50px] m-[20px] rounded-[40px] text-[#ffffff]">
                <img src={foto} className="h-[300px] w-[300px] rounded-full border border-[rgba(0,0,125,0.6)] border-[10px]"/>
                <p className="text-[40px] text-center">Brian Legal</p>
                <p className="text-[25px] text-center">Full Stack Developer</p>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

// rgba(0,0,0,1.0)
// rgba(0,0,25,1.0)
// rgba(0,0,50,1.0)
// rgba(0,0,125,1.0)
// rgba(25,25,150,1.0)
// rgba(50,50,200,1.0)
// rgba(75,75,255,1.0)
// rgba(100,100,255,1.0)
// rgba(150,150,255,1.0)
// rgba(200,200,255,1.0)
// rgba(255,255,255,1.0)

export default Home;