import styled from "styled-components";


interface CardImageProps {
    $image: string;
}

export const CardStyled = styled.div`
    max-width: 342px;
    min-height: 156px;
    border: 1px solid #0E2D68;
    border-radius: 15px;
    padding: 24px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background-color: #1D252D;

    h3 {
        font-size: 22px;
        font-weight: bolder;
        overflow-wrap: break-word;
    }

    p {
        margin-top: 8px;
        overflow-wrap: break-word;
    }
    &:hover {
        background-color: #232e38;
        cursor: pointer;
    }
`
export const CardImage = styled.div<CardImageProps>`
    max-width: 342px;
    min-height: 145px;
    border-radius: 15px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 24px;
    background-image: url(${({ $image }) => $image});
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
`