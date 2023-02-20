import Footer from "./Footer";
import Header from "./Header";
import Inicio from "./Inicio";
import About from "./About";
import Skills from "./Skills";
import Curriculum from "./Curriculum";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto"

const Home = () => {
    return(
        <div>
            <Header/>
            <Inicio/>
            <About/>
            <Skills/>
            <Curriculum/>
            <Proyectos/>
            <Contacto/>
            <Footer/>
        </div>
    )
}

export default Home;