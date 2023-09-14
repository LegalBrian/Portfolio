
import { FormattedMessage } from "react-intl";
import Carousel from "../components/Carousel";
import { tech } from "../assets/lists/SkillsList";
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
        <div id="skills" className="flex flex-col justify-center items-center text-center">
            <p className="text-4xl">
                <FormattedMessage 
                    id="skills.title" 
                    defaultMessage="Habilidades" 
                />
            </p>
            <div className="flex flex-col justify-center items-center text-2xl">
                <Carousel data={tech} />
                <div className="grid items-start gap-10 p-5 desktop:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-3 smartphone-r:grid-cols-2 smartphone:grid-cols-1">
                    <div className="flex flex-col justify-center gap-[15px]">
                        <FormattedMessage 
                            id="skills.categoryTitle1" 
                            defaultMessage="Lenguajes de programación" 
                        />
                        <div className="text-start">
                            <p className="border-y-[1px] pl-[20px] border-negro dark:border-blanco flex flex-row gap-[5px] py-[5px]">
                                <JavaScript className="w-[20px] h-[20px]"/>
                                JavaScript
                            </p>
                            <p className="border-b-[1px] pl-[20px] border-negro dark:border-blanco flex flex-row gap-[5px] py-[5px]">
                                <TypeScript className="w-[20px] h-[20px]"/>
                                TypeScript
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-[15px]">
                        <FormattedMessage 
                            id="skills.categoryTitle2" 
                            defaultMessage="Entorno de ejecución" 
                        />
                        <div className="text-start">
                            <p className="border-y-[1px] pl-[20px] border-negro dark:border-blanco flex flex-row gap-[5px] py-[5px]">
                                <NodeJS className="w-[20px] h-[20px]"/>
                                Node.js
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-[15px]">
                        <FormattedMessage 
                            id="skills.categoryTitle3" 
                            defaultMessage="Frameworks y librerías" 
                        />
                        <div className="text-start">
                            <p className="border-y-[1px] pl-[20px] border-negro dark:border-blanco flex flex-row gap-[5px] py-[5px]">
                                <React className="w-[20px] h-[20px]"/>
                                React.js
                            </p>
                            <p className="border-b-[1px] pl-[20px] border-negro dark:border-blanco flex flex-row gap-[5px] py-[5px]">
                                <React className="w-[20px] h-[20px]"/>
                                React Native
                            </p>
                            <p className="border-b-[1px] pl-[20px] border-negro dark:border-blanco flex flex-row gap-[5px] py-[5px]">
                                <ExpressJS className="w-[20px] h-[20px]"/>
                                Express.js
                            </p>
                            <p className="border-b-[1px] pl-[20px] border-negro dark:border-blanco flex flex-row gap-[5px] py-[5px]">
                                <Angular className="w-[20px] h-[20px]"/>
                                Angular
                            </p>
                            <p className="border-b-[1px] pl-[20px] border-negro dark:border-blanco flex flex-row gap-[5px] py-[5px]">
                                <Tailwind className="w-[20px] h-[20px]"/>
                                Tailwind
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-[15px]">
                        <FormattedMessage 
                            id="skills.categoryTitle4" 
                            defaultMessage="Bases de datos" 
                        />
                        <div className="text-start">
                            <p className="border-y-[1px] pl-[20px] border-negro dark:border-blanco flex flex-row gap-[5px] py-[5px]">
                                <PostgreSQL className="w-[20px] h-[20px]"/>
                                PostgreSQL
                            </p>
                            <p className="border-b-[1px] pl-[20px] border-negro dark:border-blanco flex flex-row gap-[5px] py-[5px]">
                                <MongoDB className="w-[20px] h-[20px]"/>
                                MongoDB
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-[15px]">
                        <FormattedMessage 
                            id="skills.categoryTitle5" 
                            defaultMessage="Lenguajes de marcado y estilo" 
                        />
                        <div className="text-start">
                            <p className="border-y-[1px] pl-[20px] border-negro dark:border-blanco flex flex-row gap-[5px] py-[5px]">
                                <HTML className="w-[20px] h-[20px]"/>
                                HTML
                            </p>
                            <p className="border-b-[1px] pl-[20px] border-negro dark:border-blanco flex flex-row gap-[5px] py-[5px]">
                                <CSS className="w-[20px] h-[20px]"/>
                                CSS
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-[15px]">
                        <FormattedMessage 
                            id="skills.categoryTitle6" 
                            defaultMessage="Control de versiones" 
                        />
                        <div className="text-start">
                            <p className="border-y-[1px] pl-[20px] border-negro dark:border-blanco flex flex-row gap-[5px] py-[5px]">
                                <Git className="w-[20px] h-[20px]"/>
                                Git
                            </p>
                            <p className="border-b-[1px] pl-[20px] border-negro dark:border-blanco flex flex-row gap-[5px] py-[5px]">
                                <Github className="w-[20px] h-[20px]"/>
                                GitHub
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-5">
                        <FormattedMessage 
                            id="skills.categoryTitle7" 
                            defaultMessage="Herramientas adicionales" 
                        />
                        <div className="text-start">
                            <p className="border-y-[1px] pl-[20px] border-negro dark:border-blanco flex flex-row gap-[5px] py-[5px]">
                                <Postman className="w-[20px] h-[20px]"/>
                                Postman
                            </p>
                            <p className="border-b-[1px] pl-[20px] border-negro dark:border-blanco flex flex-row gap-[5px] py-[5px]">
                                <Figma className="w-[20px] h-[20px]"/>
                                Figma
                            </p>
                            <p className="border-b-[1px] pl-[20px] border-negro dark:border-blanco flex flex-row gap-[5px] py-[5px]">
                                <Excel className="w-[20px] h-[20px]"/>
                                Excel
                            </p>
                            <p className="border-b-[1px] pl-[20px] border-negro dark:border-blanco flex flex-row gap-[5px] py-[5px]">
                                <Word className="w-[20px] h-[20px]"/>
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