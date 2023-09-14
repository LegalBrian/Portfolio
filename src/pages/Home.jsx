import foto from "../assets/images/Foto.png"
import { FormattedMessage } from 'react-intl';

const Home = () => {
    return (
        <div id="home" className="flex justify-evenly items-center gap-10 m-5 desktop:flex-row laptop:flex-row smartphone:flex-col">
            <div className="flex flex-col items-center gap-5">
                <img src={foto} alt="" className=" rounded-ss-[30px] rounded-es-[90px] rounded-se-[90px] border-azul border-8 desktop:h-[300px] desktop:w-[300px] smartphone:w-[250px] smartphone:h-[250px]"/>
                <p className="text-center text-6xl font-teko">BRIAN LEGAL</p>
                <p className="text-center text-4xl font-teko">Full Stack Web Developer</p>
            </div>
            <div className="text-3xl desktop:w-[500px] desktop:text-start laptop:w-[400px] laptop:text-start smartphone:text-center">
                <FormattedMessage 
                    id="about.description1"
                    defaultMessage="Hola, mi nombre es Brian Legal vivo en Buenos Aires, Argentina."
                />
                <br/>
                <FormattedMessage 
                    id="about.description2"
                    defaultMessage="Me considero un desarrollador apasionado que está en constante aprendizaje."
                />
                <br/>
                <FormattedMessage 
                    id="about.description2"
                    defaultMessage="Me encantan los proyectos desafiantes y siempre busco oportunidades para expandir mis habilidades y conocimientos."
                />
                
            </div>
        </div>
    )
}

export default Home;