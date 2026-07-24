import { TextAreaStyled } from "./styles";

type TextAreaProps = {
    label: string;
    id: string;
    name?: string;
    placeholder?: string;
};

    function Textarea({
        label,
        id,
        name,
        placeholder = "",
    }: TextAreaProps) {

    return (
        <TextAreaStyled>
        <label htmlFor={id}>{label}</label>
        <textarea
            id={id}
            name={name ?? id}
            placeholder={placeholder}
        />
        </TextAreaStyled>
    );
}

export default Textarea;