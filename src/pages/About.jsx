import { aboutContainer, aboutTitle, aboutDescription } from "./stylePages";
import { FormattedMessage } from 'react-intl';

const About = () => {
    return (
        <div id="about" className={aboutContainer}>
            <p className={aboutTitle}>
                <FormattedMessage 
                    id="about.title" 
                    defaultMessage="Sobre Mi" 
                />
            </p>
            <p className={aboutDescription}>
                <FormattedMessage 
                    id="about.description"
                    defaultMessage="Hola, mi nombre es Brian Legal y soy un Desarrollador Web Full Stack de Buenos Aires, Argentina. Me considero un desarrollador apasionado que está en constante aprendizaje, me encantan los proyectos desafiantes y siempre busco oportunidades para expandir mis habilidades y conocimientos. En mi tiempo libre, disfruto explorar nuevas tecnologías, ya que realmente me fascinan. Puedo afirmar con seguridad que estoy listo para aprender y crecer como desarrollador, así como para enfrentar cualquier desafío que se presente."
                />
            </p>
        </div>
    )
}

export default About;
