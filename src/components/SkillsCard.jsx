const SkillsCard = ( {svg, text} ) => {
    return (
        <div className='flex flex-col items-center justify-center desktop:h-[120px] desktop:w-[140px] smartphone:h-[80px] smartphone:w-[60px]'>
            {svg?
            <svg fill="#ffffff" className="desktop:w-[100px] desktop:h-[100px] smartphone:w-[50px] smartphone:h-[40px]" viewBox="0 0 128 128">
                {svg}
            </svg>
            : null
            }
            <p className='text-center desktop:text-[20px] smartphone:text-[10px]'>{text}</p>
        </div>
    )
}

export default SkillsCard;