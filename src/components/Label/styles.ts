import styled from "styled-components";

export const LabelStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    label {
        font-size: 16px;
        margin-bottom: 8px;
    }

    input {
        width: 449px;
        border: 1px solid #6C7D8E;
        border-radius: 8px;
        height: 40px;
        font-size: 16px;
        padding: 8px 16px;
        background-color: #1D252D;
        margin-top: 8px;
        color: #F7FEFF;

        &::placeholder {
            color: #6C7D8E;
        }

        &:focus {
            border: 1px solid #6C7D8E;
            outline: none;
        }

        &:hover {
            border: 1px solid #47B5DE;
        }
    }
`