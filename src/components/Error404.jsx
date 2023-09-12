import { FormattedMessage } from "react-intl";
import bg404 from "../assets/images/404-bg.gif"



const error404Background = {
    backgroundImage: `linear-gradient(to top, rgba(150,0,0,0.3), rgba(75,0,0,0.6), rgba(0,0,0,0.9)), url(${bg404})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

const Error404 = () => {

    return(
        <div className="flex flex-col items-center justify-center h-screen" style={error404Background}>
            <p className="text-blanco animate-pulse text-center desktop:text-[80px] smartphone:text-[50px]">
                <FormattedMessage 
                    id="error404.title1" 
                    defaultMessage="Error 404:" 
                />
            </p>
            <p className="text-rojo animate-pulse text-center desktop:text-[80px] smartphone:text-[50px]">
                <FormattedMessage 
                    id="error404.title2" 
                    defaultMessage="Página no encontrada!" 
                />
            </p>
        </div>
    )
}

export default Error404;