import ProjectsCard from "../components/ProjectsCard";
import { projects } from "../assets/lists/ProjectsList";
import { FormattedMessage } from "react-intl";

const Projects = () => {
    return (
        <div id="projects" className="flex flex-col text-center items-center">
            <p className="desktop:text-[40px] smartphone:text-[30px]">
                <FormattedMessage 
                    id="projects.title" 
                    defaultMessage="Proyectos" 
                />
            </p>
            <div className="desktop:grid grid-cols-2 justify-items-center desktop:gap-x-[100px] smartphone:flex flex-col tablet:grid tablet:gap-x-[50px] laptop:gap-x-[100px]">
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