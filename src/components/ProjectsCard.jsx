import { FormattedMessage } from "react-intl";
import YouTubeVideo from "./YoutubeVideo";

const ProjectsCard = ({title, image, videoId, repo, deploy, technologies}) => {
    return(
        <div className="flex flex-col justify-center items-center bg-negro-azul p-[20px] border-r-[4px] border-b-[4px] border-azul-hover rounded-[10px] gap-[20px] my-[20px] desktop:w-[500px] smartphone:w-[300px] smartphone-r:w-[460px] tablet:w-[300px]">
            {videoId ?
            <YouTubeVideo videoId={videoId}/>
            :
            <img 
                src={image}
                alt=""
                className="desktop:h-[300px] desktop:w-[460px] smartphone:h-[150px] smartphone:w-[260px] smartphone-r:h-[150px] smartphone-r:w-[260px]"
            /> 
            }
            <p className="text-center text-azul-hover text-[25px]">{title}</p>
            <div className="flex flex-wrap justify-center gap-[20px]">
                {technologies.map((ele, index) => {
                    return(
                        <div key={index} className="flex flex-col items-center justify-center h-[60px] w-[80px]">
                            {ele.svg}
                            <p className="text-[10px] text-center">{ele.text}</p>
                        </div>
                    )
                })}
            </div>
            <div className="flex desktop:flex-row justify-between smartphone:flex-col gap-[20px]">
                <a 
                    href={repo} target="_blank" rel="noreferrer"
                    className="flex flex-row text-center items-center gap-[5px] mt-[10px] bg-negro justify-center w-[140px] p-[5px] rounded-[30px] border-[2px] border-blanco hover:bg-azul-hover transition duration-500"
                >
                    <>
                    <FormattedMessage 
                        id="projectcard.buttonRepository" 
                        defaultMessage="Repositorio" 
                    />
                    </>
                    <svg xmlns={"http://www.w3.org/2000/svg"} viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                        <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
                    </svg>
                </a>
                {deploy?
                <a 
                    href={deploy} target="_blank" rel="noreferrer"
                    className="flex flex-row text-center items-center gap-[5px] mt-[10px] bg-negro justify-center w-[140px] p-[5px] rounded-[30px] border-[2px] border-blanco hover:bg-azul-hover transition duration-500"
                >

                    <>
                        <FormattedMessage 
                            id="projectcard.buttonDeploy" 
                            defaultMessage="Deploy" 
                        />
                    </>
                    <svg xmlns={"http://www.w3.org/2000/svg"} viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor"  width="16" height="16" focusable="false">
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