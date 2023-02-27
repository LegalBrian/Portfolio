import { skillsCardContainer, skillsCardSvg, skillsCardText } from "./styleComponents";

const SkillsCard = ( {svg, text} ) => {
    return (
        <div className={skillsCardContainer}>
            {svg?
            <svg fill="#ffffff" className={skillsCardSvg} viewBox="0 0 128 128">
                {svg}
            </svg>
            : null
            }
            <p className={skillsCardText}>{text}</p>
        </div>
    )
}

export default SkillsCard;