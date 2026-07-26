import { ReactNode } from "react";
import { ButtonStyled } from "./styles";

type Props = {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
};

function Button({
    children,
    type = "button",
    disabled = false,
}: Props) {
    return (
        <ButtonStyled
            type={type}
            disabled={disabled}
        >
            {children}
        </ButtonStyled>
    );
}

export default Button;