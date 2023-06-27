import { skillsCardContainer, skillsCardSvg, skillsCardText } from "../assets/styles/styleComponents";

const SkillsCard = ( {svg, text} ) => {
    return (
        <div className={skillsCardContainer}>
            {svg}
            <p className={skillsCardText}>{text}</p>
        </div>
    )
}

export default SkillsCard;