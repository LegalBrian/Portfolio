import ProjectsCard from "../components/ProjectsCard";
import { projects } from "../components/lists/ProjectsList";
import { projectsContainer, projectsTitle, projectsListContainer } from "./stylePages";

const Projects = () => {
    return (
        <div id="projects" className={projectsContainer}>
            <p className={projectsTitle}>Projects</p>
            <div className={projectsListContainer}>
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