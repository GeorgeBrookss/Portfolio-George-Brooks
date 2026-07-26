import { TextAreaStyled } from "./styles";

type TextAreaProps = {
    label: string;
    id: string;
    name?: string;
    placeholder?: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

function Textarea({
    label,
    id,
    name,
    placeholder = "",
    value,
    onChange,
}: TextAreaProps) {
    return (
        <TextAreaStyled>
            <label htmlFor={id}>{label}</label>

            <textarea
                id={id}
                name={name ?? id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </TextAreaStyled>
    );
}

export default Textarea;