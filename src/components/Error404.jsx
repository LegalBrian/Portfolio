import { error404Background, error404Container, error404Title1, error404Title2 } from "../assets/styles/styleComponents";
import { FormattedMessage } from "react-intl";

const Error404 = () => {

    return(
        <div className={error404Container} style={error404Background}>
            <p className={error404Title1}>
                <FormattedMessage 
                    id="error404.title1" 
                    defaultMessage="Error 404:" 
                />
            </p>
            <p className={error404Title2}>
                <FormattedMessage 
                    id="error404.title2" 
                    defaultMessage="Página no encontrada!" 
                />
            </p>
        </div>
    )
}

export default Error404;