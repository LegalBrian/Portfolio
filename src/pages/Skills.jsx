
import { FormattedMessage } from "react-intl";
import Carrucel from "../components/Carrucel";
import { tech } from "../components/lists/SkillsList";
import { skillsContainer, skillsTitle, skillsListContainer, skillsListTitle } from "./stylePages";

const Skills = () => {
    return (
        <div id="skills" className={skillsContainer}>
            <p className={skillsTitle}>
                <FormattedMessage 
                    id="skills.title" 
                    defaultMessage="Habilidades" 
                />
            </p>
            <div className={skillsListContainer}>
                <p className={skillsListTitle}>
                    <FormattedMessage 
                        id="skills.tech" 
                        defaultMessage="Habilidades Técnicas" 
                    />
                </p>
                <Carrucel data={tech} />
            </div>
        </div>
    )
}

export default Skills;