import ProjectsCard from "../components/ProjectsCard";
import { projects } from "../assets/lists/ProjectsList";
import { FormattedMessage } from "react-intl";

const Projects = () => {
    return (
        <div id="projects" className="flex flex-col text-center items-center">
            <p className="desktop:text-4xl smartphone:text-3xl">
                <FormattedMessage 
                    id="projects.title" 
                    defaultMessage="Proyectos" 
                />
            </p>
            <div className="grid-cols-2 justify-items-center desktop:grid desktop:gap-x-24 laptop:gap-x-24 tablet:grid tablet:gap-x-[50px] smartphone:flex smartphone:flex-col">
                {projects.map((ele, index) => {
                    return (
                        <ProjectsCard key={index} title={ele.title} image={ele.image} videoId={ele.videoId} repo={ele.repo} deploy={ele.deploy} technologies={ele.technologies} />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;