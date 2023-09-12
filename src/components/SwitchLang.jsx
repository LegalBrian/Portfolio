import { ReactComponent as Spain } from '../assets/images/Spain.svg';
import { ReactComponent as USA } from '../assets/images/USA.svg';

const SwitchLang = ( { lang } ) => {

    const changeLang = () => {
        if (lang.currentLang === "es-AR"){
            lang.setLang("en-US");
        }
        else{
            lang.setLang("es-AR");
        }
    }

    return (
        <button onClick={() => changeLang()} className={`flex w-16 h-8 rounded-full transition-all duration-500 cursor-pointer ${lang.currentLang === "es-AR" ? "bg-rojo" : "bg-azul-hover"}`}>
            {
                lang.currentLang === "es-AR" ?
                <Spain className={`shadow-2xl h-8 w-8 rounded-full`}/>
                :
                <USA className={`shadow-2xl h-8 w-8 rounded-full ml-8`}/>
            }
        </button>
    );
};

export default SwitchLang;