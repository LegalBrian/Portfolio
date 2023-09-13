import YouTubeVideo from "./YoutubeVideo";
import Button from "./Button";
import { ReactComponent as Redirect } from '../assets/images/Redirect.svg';

const ProjectsCard = ({title, image, videoId, repo, deploy, technologies}) => {
    return(
        <div className="flex flex-col justify-center items-center bg-element-light dark:bg-element-dark p-[20px] border-r-[4px] border-b-[4px] border-azul rounded-[10px] gap-[20px] my-[20px] desktop:w-[500px] smartphone:w-[300px] smartphone-r:w-[460px] tablet:w-[300px]">
            {videoId ?
            <YouTubeVideo videoId={videoId}/>
            :
            <img 
                src={image}
                alt=""
                className="desktop:h-[300px] desktop:w-[460px] smartphone:h-[150px] smartphone:w-[260px] smartphone-r:h-[150px] smartphone-r:w-[260px]"
            /> 
            }
            <p className="text-center text-azul text-[25px]">{title}</p>
            <div className="flex flex-wrap justify-center gap-[20px]">
                {technologies.map((ele, index) => {
                    return(
                        <div key={index} className="flex flex-col items-center justify-center h-[60px] w-[80px]">
                            {ele.svg}
                        </div>
                    )
                })}
            </div>
            <div className="flex desktop:flex-row justify-between smartphone:flex-col gap-[20px]">
                <Button 
                    Href={repo} 
                    TextId={"projectcard.buttonRepository"} 
                    defaultMessage={"Repositorio"} 
                    Svg={Redirect} 
                    SvgS={"20"} 
                    SvgF={"white"}
                />
                {deploy?
                <Button 
                    Href={deploy} 
                    TextId={"projectcard.buttonDeploy"} 
                    defaultMessage={"Deploy"} 
                    Svg={Redirect} 
                    SvgS={"20"} 
                    SvgF={"white"}
                />
                :null}
            </div>
        </div>
    )
}

export default ProjectsCard;