import { error404Background, error404Container, error404Title1, error404Title2 } from "./styleComponents";

const Error404 = () => {

    return(
        <div className={error404Container} style={error404Background}>
            <p className={error404Title1}>404 Error:</p>
            <p className={error404Title2}>Page not found.</p>
        </div>
    )
}

export default Error404;