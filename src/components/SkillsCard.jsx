const SkillsCard = ( {svg, text} ) => {
    return (
        <div className='flex flex-col items-center justify-center h-[120px] w-[140px]'>
            {svg?
            <svg fill="#ffffff" className="w-[100px] h-[100px]" viewBox="0 0 128 128">
                {svg}
            </svg>
            : null
            }
            <p className='text-[20px] text-center'>{text}</p>
        </div>
    )
}

export default SkillsCard;