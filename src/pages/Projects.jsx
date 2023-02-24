import ProjectsCard from "../components/ProjectsCard";
import { projects } from "../components/lists/ProjectsList";

const Projects = () => {
    return (
        <div id="projects" className="bg-[rgba(0,0,50,1.0)] text-[#ffffff] flex flex-col text-center items-center desktop:p-[40px] smartphone:p-[20px]">
            <p className="desktop:text-[40px] smartphone:text-[30px]">Projects</p>
            <div className="desktop:grid grid-cols-2 justify-items-center desktop:gap-[60px] smartphone:flex flex-col smartphone:gap-[0px]">
                {projects.map(ele => {
                    return(
                        <ProjectsCard title={ele.title} image={ele.image} videoId={ele.videoId} repo={ele.repo} deploy={ele.deploy} technologies={ele.technologies} />
                    )
                    })
                }
            </div>
        </div>
    )
}

export default Projects;