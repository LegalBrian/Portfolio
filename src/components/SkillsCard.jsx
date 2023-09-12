const SkillsCard = ( {svg, text} ) => {
    return (
        <div className="flex flex-col items-center justify-center desktop:h-[140px] desktop:w-[140px] smartphone:h-[80px] smartphone:w-[80px] smartphone-r:h-[90px] smartphone-r:w-[100px] tablet:h-[120px] tablet:w-[130px]">
            {svg}
            <p className="text-center desktop:text-[20px] smartphone:text-[12px] smartphone-r:text-[15px] tablet:text-[20px]">{text}</p>
        </div>
    )
}

export default SkillsCard;