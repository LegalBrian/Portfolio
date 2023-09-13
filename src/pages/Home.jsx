import foto from "../assets/images/Foto.png"
import { FormattedMessage } from 'react-intl';

const Home = () => {
    return (
        <div id="home" className="flex justify-evenly">
            <div className="flex flex-col items-center justify-center rounded-[40px] my-[20px] gap-[10px]">
                <img src={foto} alt="" className=" rounded-ss-[30px] rounded-es-[90px] rounded-se-[90px] border-azul  border-[8px] desktop:h-[250px] desktop:w-[250px] smartphone:w-[200px] smartphone:h-[200px]"/>
                <p className="text-center desktop:text-[40px] smartphone:text-[30px]">BRIAN LEGAL</p>
                <p className="text-center text-[20px]">Full Stack Web Developer</p>
            </div>
            <div className="flex flex-col w-[600px] justify-center items-center text-start desktop:px-[40px] smartphone:px-[20px]">
                <p className="desktop:text-[20px] smartphone:text-[15px]">
                    <FormattedMessage 
                        id="about.description"
                        defaultMessage="Hola, mi nombre es Brian Legal vivo en Buenos Aires, Argentina. Me considero un desarrollador apasionado que está en constante aprendizaje, me encantan los proyectos desafiantes y siempre busco oportunidades para expandir mis habilidades y conocimientos."
                    />
                </p>
            </div>
        </div>
    )
}

export default Home;