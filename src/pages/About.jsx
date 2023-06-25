import { aboutContainer, aboutTitle, aboutDescription } from "./stylePages";
import { IntlProvider, FormattedMessage } from 'react-intl';
import MensajesIngles from "../lang/en-US.json";
import MensajesEspañol from "../lang/es-AR.json";

const About = () => {
    return (
        <IntlProvider locale="en-US" messages={MensajesEspañol}>
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
        </IntlProvider>
    )
}

export default About;
