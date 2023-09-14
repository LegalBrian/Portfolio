import Button from "./Button";
import { ReactComponent as Redirect } from '../assets/images/Redirect.svg';

const ExperienceCard = ( { company, role, date, description, certificate } ) => {
    return(
        <div className="flex flex-col bg-element-light dark:bg-element-dark p-[30px] border-r-[4px] border-b-[4px] border-azul rounded-[10px] gap-[5px] desktop:w-[500px] smartphone:w-[350px] smartphone-r:w-[450px] tablet:w-[350px]">
            <p className="text-start text-2xl">{company}</p>
            <p className="text-start text-azul text-3xl">{role}</p>
            <p className="text-start text-azul text-xl">{date}</p>
            <p className="text-start text-xl">{description}</p>
            {certificate ?
                <Button 
                    Href={certificate} 
                    TextId={"experienceCard.button"} 
                    defaultMessage={"Certificado"} 
                    Svg={Redirect} 
                    SvgS={"20"} 
                    SvgF={"white"}
                />
            :null}
        </div>
    )
}

export default ExperienceCard;