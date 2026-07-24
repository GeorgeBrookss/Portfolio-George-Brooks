import { LabelStyled } from "./styles";

type LabelProps = {
    label: string;
    id: string;
    name?: string;
    type?: string;
    placeholder?: string;
};

    function Label({
        label,
        id,
        name,
        type = "text",
        placeholder = "",
    }: LabelProps) {

    return (
        <LabelStyled>
        <label htmlFor={id}>{label}</label>
        <input
            type={type}
            id={id}
            name={name ?? id}
            placeholder={placeholder}
        />
        </LabelStyled>
    );
}

export default Label;