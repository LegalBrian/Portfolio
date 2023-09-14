import { FormattedMessage } from "react-intl";

const Button = ({ Href, TextId, defaultMessage, Svg, SvgS, SvgF, Submit }) => {
    return(
        <a 
            href={Href} target="_blank" rel="noreferrer" type={Submit}
            className="flex flex-row justify-center text-center items-center font-handjet text-xl gap-[5px] mt-[10px] bg-azul text-blanco w-[130px] p-[5px] rounded-[10px] hover:bg-azul-hover transition duration-500"
        >
            <FormattedMessage 
                id={TextId}
                defaultMessage={defaultMessage} 
                />  
            {
                Svg ?
                <Svg width={SvgS} height={SvgS} fill={SvgF} />
                :
                null
            }
        </a>
    )
}

export default Button;