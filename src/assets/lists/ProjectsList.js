
import { projectCardTechnologiesSvg } from '../styles/styleComponents';
import { ReactComponent as JavaScript } from '../svg/Javascript.svg';
import { ReactComponent as NodeJS } from '../svg/NodeJS.svg';
import { ReactComponent as React } from '../svg/React.svg';
import { ReactComponent as Tailwind } from '../svg/Tailwind.svg';
import { ReactComponent as PostgreSQL } from '../svg/PostgreSQL.svg';
import { ReactComponent as MongoDB } from '../svg/MongoDB.svg';
import { ReactComponent as HTML } from '../svg/HTML.svg';
import { ReactComponent as CSS } from '../svg/CSS.svg';

export const projects = [
    {
        title: "Find a Home", 
        image: "",
        videoId: "w5oc2njVr3c",
        repo: "https://github.com/pablo99nunez/Find-a-Home", 
        deploy: "",
        technologies: [
            {
                svg: <MongoDB className={projectCardTechnologiesSvg}/>,
                text: "MongoDB",
            },
            {
                svg: <NodeJS className={projectCardTechnologiesSvg}/>,
                text: "ExpressJS",
            },
            {
                svg: <React className={projectCardTechnologiesSvg}/>,
                text: "React Native",
            },
            {
                svg: <NodeJS className={projectCardTechnologiesSvg}/>,
                text: "NodeJS",
            },
            {
                svg: <JavaScript className={projectCardTechnologiesSvg}/>,
                text: "JavaScript",
            },
            {
                svg: <Tailwind className={projectCardTechnologiesSvg}/>,
                text: "Tailwind",
            },
            {
                svg: <HTML className={projectCardTechnologiesSvg}/>,
                text: "HTML",
            },
            {
                svg: <CSS className={projectCardTechnologiesSvg}/>,
                text: "CSS",
            },
        ],
    },
    {
        title: "Pokedex", 
        image: "https://raw.githubusercontent.com/LegalBrian/Portfolio/main/src/assets/images/Pokedex.png",
        videoId: null,
        repo: "https://github.com/LegalBrian/Pokemon-PI", 
        deploy: "",
        technologies: [
            {
                svg: <PostgreSQL className={projectCardTechnologiesSvg}/>,
                text: "PostgreSQL",
            },
            {
                svg: <NodeJS className={projectCardTechnologiesSvg}/>,
                text: "ExpressJS",
            },
            {
                svg: <React className={projectCardTechnologiesSvg}/>,
                text: "React",
            },
            {
                svg: <NodeJS className={projectCardTechnologiesSvg}/>,
                text: "NodeJS",
            },
            {
                svg: <JavaScript className={projectCardTechnologiesSvg}/>,
                text: "JavaScript",
            },
            {
                svg: <Tailwind className={projectCardTechnologiesSvg}/>,
                text: "Tailwind",
            },
            {
                svg: <HTML className={projectCardTechnologiesSvg}/>,
                text: "HTML",
            },
            {
                svg: <CSS className={projectCardTechnologiesSvg}/>,
                text: "CSS",
            },
        ],
    },
]