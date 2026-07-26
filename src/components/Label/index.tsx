import { LabelStyled } from "./styles";

type LabelProps = {
    label: string;
    id: string;
    name?: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Label({
    label,
    id,
    name,
    type = "text",
    placeholder = "",
    value,
    onChange,
}: LabelProps) {
    return (
        <LabelStyled>
            <label htmlFor={id}>{label}</label>

            <input
                type={type}
                id={id}
                name={name ?? id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </LabelStyled>
    );
}

export default Label;