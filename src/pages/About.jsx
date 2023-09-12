import { FormattedMessage } from 'react-intl';

const About = () => {
    return (
        <div id="about" className="flex flex-col justify-center items-center bg-negro-azul text-blanco text-center py-[20px] desktop:px-[40px] smartphone:px-[20px]">
            <p className="desktop:text-[40px] smartphone:text-[30px]">
                <FormattedMessage 
                    id="about.title" 
                    defaultMessage="Sobre Mi" 
                />
            </p>
            <p className="desktop:text-[20px] smartphone:text-[15px]">
                <FormattedMessage 
                    id="about.description"
                    defaultMessage="Hola, mi nombre es Brian Legal y soy un Desarrollador Web Full Stack de Buenos Aires, Argentina. Me considero un desarrollador apasionado que está en constante aprendizaje, me encantan los proyectos desafiantes y siempre busco oportunidades para expandir mis habilidades y conocimientos. En mi tiempo libre, disfruto explorar nuevas tecnologías, ya que realmente me fascinan. Puedo afirmar con seguridad que estoy listo para aprender y crecer como desarrollador, así como para enfrentar cualquier desafío que se presente."
                />
            </p>
        </div>
    )
}

export default About;
