import { youtubeVideoContainer, youtubeVideoButton, youtubeVideoButtonSvg } from "../assets/styles/styleComponents";

const YouTubeVideo = ({ videoId }) => {

    const youtubeVideoBackground = {
        backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(75,75,255,0.5)),url(https://img.youtube.com/vi/${videoId}/mqdefault.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className={youtubeVideoContainer} style={youtubeVideoBackground}>
            <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer" className={youtubeVideoButton}>
                <svg className={youtubeVideoButtonSvg} viewBox="0 0 24 24">
                    <path fill="white" d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path>
                </svg>
            </a>
        </div>
    );
};

export default YouTubeVideo;