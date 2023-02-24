const YouTubeVideo = ({ videoId }) => {
    const estilos = {
        backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(75,75,255,0.5)),url(https://img.youtube.com/vi/${videoId}/mqdefault.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className="w-[450px] h-[300px] flex justify-center items-center" style={estilos}>
            <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer" className="bg-[rgba(0,0,50,1.0)] px-[20px] rounded-[20px] hover:bg-[rgba(75,75,255,1)] transition duration-500">
                <svg className="w-[60px] text-[#ffffff]" viewBox="0 0 24 24">
                    <path fill="white" d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path>
                </svg>
            </a>
        </div>
    );
};

export default YouTubeVideo;




// rgba(0,0,0,1.0)
// rgba(0,0,25,1.0)
// rgba(0,0,50,1.0)
// rgba(0,0,75,1.0)
// rgba(75,75,255,1)
// rgba(255,255,255,1.0)
