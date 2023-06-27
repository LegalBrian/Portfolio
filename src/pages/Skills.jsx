
import { FormattedMessage } from "react-intl";
import Carrucel from "../components/Carrucel";
import { tech } from "../assets/lists/SkillsList";
import { skillsContainer, skillsTitle, skillsListContainer, skillsCategoryContainer, skillsCategory, skillsCategoryTitle, skillsCategoryList, skillsCategoryItem, skillsCategoryItemIcon, skillsCategoryFirstItem } from "../assets/styles/stylePages";
import { ReactComponent as JavaScript } from '../assets/svg/Javascript.svg';
import { ReactComponent as TypeScript } from '../assets/svg/Typescript.svg';
import { ReactComponent as NodeJS } from '../assets/svg/NodeJS.svg';
import { ReactComponent as React } from '../assets/svg/React.svg';
import { ReactComponent as ExpressJS } from '../assets/svg/ExpressJS.svg';
import { ReactComponent as Angular } from '../assets/svg/Angular.svg';
import { ReactComponent as Tailwind } from '../assets/svg/Tailwind.svg';
import { ReactComponent as PostgreSQL } from '../assets/svg/PostgreSQL.svg';
import { ReactComponent as MongoDB } from '../assets/svg/MongoDB.svg';
import { ReactComponent as HTML } from '../assets/svg/HTML.svg';
import { ReactComponent as CSS } from '../assets/svg/CSS.svg';
import { ReactComponent as Git } from '../assets/svg/Git.svg';
import { ReactComponent as Github } from '../assets/svg/Github.svg';
import { ReactComponent as Postman } from '../assets/svg/Postman.svg';
import { ReactComponent as Figma } from '../assets/svg/Figma.svg';
import { ReactComponent as Excel } from '../assets/svg/Excel.svg';
import { ReactComponent as Word } from '../assets/svg/Word.svg';

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
                <Carrucel data={tech} />
                <div className={skillsCategoryContainer}>
                    <div className={skillsCategory}>
                        <p className={skillsCategoryTitle}>
                            <FormattedMessage 
                                id="skills.categoryTitle1" 
                                defaultMessage="Lenguajes de programación" 
                            />
                        </p>
                        <div className={skillsCategoryList}>
                            <p className={skillsCategoryFirstItem}>
                                <JavaScript className={skillsCategoryItemIcon}/>
                                JavaScript
                            </p>
                            <p className={skillsCategoryItem}>
                                <TypeScript className={skillsCategoryItemIcon}/>
                                TypeScript
                            </p>
                        </div>
                    </div>
                    <div className={skillsCategory}>
                        <p className={skillsCategoryTitle}>
                            <FormattedMessage 
                                id="skills.categoryTitle2" 
                                defaultMessage="Entorno de ejecución" 
                            />
                        </p>
                        <div className={skillsCategoryList}>
                            <p className={skillsCategoryFirstItem}>
                                <NodeJS className={skillsCategoryItemIcon}/>
                                Node.js
                            </p>
                        </div>
                    </div>
                    <div className={skillsCategory}>
                        <p className={skillsCategoryTitle}>
                            <FormattedMessage 
                                id="skills.categoryTitle3" 
                                defaultMessage="Frameworks y librerias" 
                            />
                        </p>
                        <div className={skillsCategoryList}>
                            <p className={skillsCategoryFirstItem}>
                                <React className={skillsCategoryItemIcon}/>
                                React.js
                            </p>
                            <p className={skillsCategoryItem}>
                                <React className={skillsCategoryItemIcon}/>
                                React Native
                            </p>
                            <p className={skillsCategoryItem}>
                                <ExpressJS className={skillsCategoryItemIcon}/>
                                Express.js
                            </p>
                            <p className={skillsCategoryItem}>
                                <Angular className={skillsCategoryItemIcon}/>
                                Angular
                            </p>
                            <p className={skillsCategoryItem}>
                                <Tailwind className={skillsCategoryItemIcon}/>
                                Tailwind
                            </p>
                        </div>
                    </div>
                    <div className={skillsCategory}>
                        <p className={skillsCategoryTitle}>
                            <FormattedMessage 
                                id="skills.categoryTitle4" 
                                defaultMessage="Bases de datos" 
                            />
                        </p>
                        <div className={skillsCategoryList}>
                            <p className={skillsCategoryFirstItem}>
                                <PostgreSQL className={skillsCategoryItemIcon}/>
                                PostgreSQL
                            </p>
                            <p className={skillsCategoryItem}>
                                <MongoDB className={skillsCategoryItemIcon}/>
                                MongoDB
                            </p>
                        </div>
                    </div>
                    <div className={skillsCategory}>
                        <p className={skillsCategoryTitle}>
                            <FormattedMessage 
                                id="skills.categoryTitle5" 
                                defaultMessage="Lenguajes de marcado y estilo" 
                            />
                        </p>
                        <div className={skillsCategoryList}>
                            <p className={skillsCategoryFirstItem}>
                                <HTML className={skillsCategoryItemIcon}/>
                                HTML
                            </p>
                            <p className={skillsCategoryItem}>
                                <CSS className={skillsCategoryItemIcon}/>
                                CSS
                            </p>
                        </div>
                    </div>
                    <div className={skillsCategory}>
                        <p className={skillsCategoryTitle}>
                            <FormattedMessage 
                                id="skills.categoryTitle6" 
                                defaultMessage="Control de versiones" 
                            />
                        </p>
                        <div className={skillsCategoryList}>
                            <p className={skillsCategoryFirstItem}>
                                <Git className={skillsCategoryItemIcon}/>
                                Git
                            </p>
                            <p className={skillsCategoryItem}>
                                <Github className={skillsCategoryItemIcon}/>
                                GitHub
                            </p>
                        </div>
                    </div>
                    <div className={skillsCategory}>
                        <p className={skillsCategoryTitle}>
                            <FormattedMessage 
                                id="skills.categoryTitle7" 
                                defaultMessage="Herramientas adicionales" 
                            />
                        </p>
                        <div className={skillsCategoryList}>
                            <p className={skillsCategoryFirstItem}>
                                <Postman className={skillsCategoryItemIcon}/>
                                Postman
                            </p>
                            <p className={skillsCategoryItem}>
                                <Figma className={skillsCategoryItemIcon}/>
                                Figma
                            </p>
                            <p className={skillsCategoryItem}>
                                <Excel className={skillsCategoryItemIcon}/>
                                Excel
                            </p>
                            <p className={skillsCategoryItem}>
                                <Word className={skillsCategoryItemIcon}/>
                                Word
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;