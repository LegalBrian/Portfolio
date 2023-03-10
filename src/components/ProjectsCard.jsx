import { projectCardContainer, projectCardImage, projectCardTitle, projectCardTechnologiesContainer, projectCardTechnologies, projectCardTechnologiesSvg, projectCardTechnologiesText, projectCardButtonsContainer, projectCardButton } from "./styleComponents";
import YouTubeVideo from "./YoutubeVideo";

const ProjectsCard = ({title, image, videoId, repo, deploy, technologies}) => {
    return(
        <div className={projectCardContainer}>
            {videoId ?
            <YouTubeVideo videoId={videoId}/>
            :
            <img 
                src={image}
                className={projectCardImage}
            /> 
            }
            <p className={projectCardTitle}>{title}</p>
            <div className={projectCardTechnologiesContainer}>
                {technologies.map(ele => {
                    return(
                        <div className={projectCardTechnologies}>
                            <svg fill="#ffffff" className={projectCardTechnologiesSvg} viewBox="0 0 128 128">
                                {ele.svg}
                            </svg>
                            <p className={projectCardTechnologiesText}>{ele.text}</p>
                        </div>
                        )
                    })
                }
            </div>
            <div className={projectCardButtonsContainer}>
                <a 
                    href={repo} target="_blank"
                    className={projectCardButton}
                >
                    <text>Repositorio</text>
                    <svg xmlns={"http://www.w3.org/2000/svg"} viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
                    </svg>
                </a>
                {deploy?
                <a 
                    href={deploy}   target="_blank"
                    className={projectCardButton}
                >

                    <text>Deploy</text>
                    <svg xmlns={"http://www.w3.org/2000/svg"} viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
                    </svg>
                </a>
                :null
                }
            </div>
        </div>
    )
}

export default ProjectsCard;