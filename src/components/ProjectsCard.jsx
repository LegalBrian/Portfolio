import YouTubeVideo from "./YoutubeVideo";

const ProjectsCard = ({title, image, videoId, repo, deploy, technologies}) => {
    return(
        <div className="w-[500px] bg-[rgba(0,0,25,1.0)] flex flex-col justify-center items-center p-[20px] border-r-[4px] border-b-[4px] border-[rgba(75,75,255,1)] rounded-[10px] gap-[20px] my-[20px]">
            {videoId ?
            <YouTubeVideo videoId={videoId}/>
            :
            <img 
                src={image}
                className="w-[450px] h-[300px]"
            /> 
            }
            <p className="text-center">{title}</p>
            <div className="flex flex-wrap justify-center gap-[20px]">
                {technologies.map(ele => {
                    return(
                        <div className='flex flex-col items-center justify-center h-[60px] w-[80px]'>
                            <svg fill="#ffffff" className="w-[60px] h-[60px]" viewBox="0 0 128 128">
                                {ele.svg}
                            </svg>
                            <p className='text-[10px] text-center'>{ele.text}</p>
                        </div>
                        )
                    })
                }
            </div>
            <div className="flex flex-row gap-[70px]">
                <a 
                    href={repo} target="_blank"
                    className="flex flex-row text-center items-center mt-[10px] bg-[rgba(0,0,0,1)] justify-center w-[140px] p-[5px] rounded-[30px] border-[2px] border-[rgba(255,255,255,1)] hover:bg-[rgba(75,75,255,1)] transition duration-500"
                >
                    <text>Repositorio</text>
                    <svg xmlns={"http://www.w3.org/2000/svg"} viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
                    </svg>
                </a>
                {deploy?
                <a 
                    href={deploy}   target="_blank"
                    className="flex flex-row text-center items-center mt-[10px] bg-[rgba(0,0,0,1)] justify-center w-[140px] p-[5px] rounded-[30px] border-[2px] border-[rgba(255,255,255,1)] hover:bg-[rgba(75,75,255,1)] transition duration-500"
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
