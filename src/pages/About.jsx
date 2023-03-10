import { aboutContainer, aboutTitle, aboutDescription } from "./stylePages";

const About = () => {
    return (
        <div id="about" className={aboutContainer}>
            <p className={aboutTitle}>About me</p>
            <p className={aboutDescription}>
            Hi, my name is Brian Legal and I am a Full Stack Developer from Buenos Aires, Argentina. I think of myself as a passionate developer who is constantly learning, loves challenging projects, and is always looking for opportunities to expand their skills and knowledge. In my free time, I enjoy exploring new technologies, as I am truly fascinated by them. I can say for sure that I am ready to learn and grow as a developer, as well as to face any challenge that lies ahead.
            </p>
        </div>
    )
}

export default About;