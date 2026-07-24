import { ReactNode } from "react";
import {ButtonStyled} from "./styles"

type Props = {
    children: ReactNode;
};
function Button( {children}: Props) {
    return (
        <ButtonStyled>{children}</ButtonStyled>
)
}

export default Button;
