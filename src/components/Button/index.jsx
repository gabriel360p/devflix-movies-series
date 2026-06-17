import { ButtonRed, ButtonWhite } from "./styles";
export const Button = ({ ...props }) => {
    return (
        <>
            {props.type ?
                (<ButtonRed {...props}> {props.children}</ButtonRed>)
                :
                (<ButtonWhite {...props}>{props.children}</ButtonWhite>)
            }
        </>
    )
}