
import Carrucel from "../components/Carrucel";
import { tech, soft } from "../components/lists/SkillsList";
import { skillsContainer, skillsTitle, skillsListContainer, skillsListTitle } from "./stylePages";

const Skills = () => {
    return (
        <div id="skills" className={skillsContainer}>
            <p className={skillsTitle}>Skills</p>
            <div className={skillsListContainer}>
                <p className={skillsListTitle}>Tech Skills</p>
                <Carrucel data={tech} />
                <p className={skillsListTitle}>Soft Skills</p>
                <Carrucel data={soft} />
            </div>
        </div>
    )
}

export default Skills;