import styled from "styled-components";
import Hero from "../../assets/images/Home/Hero.svg";
import HeroMobile from "../../assets/images/Home/HeroMobile.svg";
import Blobs from "../../assets/images/Home/blobs.png";
import { ButtonStyled } from "../../components/Button/styles";
import { Link } from "react-router-dom";

export const HomeStyled = styled.div`
    margin-bottom: 40px;
    max-width: 1440px;
    justify-self: center;
    `;

export const HeroTitle = styled.section`
    justify-items: center;
    margin: 64px 182px;
    height: 500px;
    width: 1076px;
    justify-self: center;
    background-image: url(${Hero});
    margin-bottom: 64px;

    h2 {
        padding-top: 171px;
        padding-bottom: 16px;
        font-size: 48px;
    }

    h4 {
        font-size: 22px;
        padding-bottom: 32px;
        color: #47b5de;
    }

    @media (max-width: 1171px) {
        width: 100%;
        max-width: 700px;
        margin: 40px auto 48px auto;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;

        h2 {
        font-size: 40px;
        }
    }

    @media (max-width: 767px) {
        margin-left: 0;
        margin-right: 0;
        

        max-width: 300px;
        background-image: url(${HeroMobile});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        margin-bottom: 24px;

        h2 {
        font-size: 40px;
        }
    }
    `;

export const AboutStyled = styled.section`
    margin-bottom: 64px;

    h3 {
        font-family: "Electrolize", sans-serif;
        font-weight: normal;
        padding-top: 64px;
        margin-left: 182px;
        font-size: 28px;
        color: #47b5de;
    }

    p {
        max-width: 1076px;
        margin-top: 32px;
        font-size: 17px;
        margin-left: 182px;
    }

    @media (max-width: 1171px) {
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;

        h3 {
        margin-left: 0;
        padding-top: 20px;
        }

        p {
        max-width: 700px;
        margin-left: 0;
        }
    }

    @media (max-width: 767px) {
        max-width: 300px;

        h3 {
        margin-right: 60%;
        justify-self: center;
        margin-left: 0;
        font-size: 24px;
        }

        p {
        justify-self: center;
        max-width: 300px;
        font-size: 14px;
        margin-left: 0;
        }
    }
    `;

export const ProjectsStyled = styled.section`
    background-image: url(${Blobs});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1070px;

    h3.projects {
        font-family: "Electrolize", sans-serif;
        font-weight: normal;
        padding-top: 32px;
        margin-left: 182px;
        font-size: 28px;
        color: #47b5de;
    }

    ul {
        list-style: none;
        margin-top: 32px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        max-width: 1074px;
        margin-left: 182px;
        padding-bottom: 80px;

        li {
        text-decoration: none;
        color: aliceblue;
        }
    }

    @media (max-width: 1171px) {
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
        background-size: contain;

        h3.projects {
        margin-left: 0;
        }

        ul {
        max-width: 700px;
        margin-left: 0;
        gap: 16px;
        }
    }

    @media (max-width: 767px) {
        max-width: 300px;

        h3.projects {
        font-size: 24px;
        justify-self: center;
        margin-left: 0;
        margin-right: 69%;
        }

        ul {
        grid-template-columns: 1fr;
        max-width: 300px;
        margin-left: 0;
        justify-self: center;

        li {
            margin-bottom: 24px;
        }
        }
    }

    @media (min-width: 768px) and (max-width: 1171px) {
        ul {
        grid-template-columns: 1fr 1fr;
        }
    }
    `;

export const StacksStyled = styled.section`
    h3.stacks {
        font-family: "Electrolize", sans-serif;
        font-weight: normal;
        margin-top: 32px;
        margin-bottom: 32px;
        padding-top: 32px;
        margin-left: 182px;
        font-size: 28px;
        color: #47b5de;
    }

    h3 {
        font-weight: normal;
        margin-left: 182px;
    }

    ul {
        list-style: none;
        margin-top: 32px;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 24px;
        max-width: 1074px;
        margin-left: 182px;
        padding-bottom: 80px;

        li {
        &:hover {
            transform: translateY(-4px);
        }
        }
    }

    @media (max-width: 1171px) {
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;

        h3.stacks,
        h3 {
        margin-left: 0;
        }

        ul {
        max-width: 700px;
        margin-left: 0;
        gap: 16px;

        li img {
            max-width: 100%;
            height: auto;
        }
        }
    }

    @media (max-width: 767px) {
        max-width: 300px;

        h3.stacks {
        margin-left: 0;
        justify-self: center;
        margin-right: 55%;
        font-size: 24px;
        }

        h3 {
        margin-left: 0;
        justify-self: center;
        margin-right: 67%;
        }

        h3.tool {
        margin-right: 58%;
        }

        ul {
        justify-self: center;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
        max-width: 300px;
        margin-left: 0;

        li {
            img {
            max-width: 130px;
            }
        }
        }
    }
    `;

export const ContactStyled = styled.section`
    margin-left: 182px;
    display: block;

    .contactInfo {
        display: flex;
    }

    .textAndLinks {
        margin-right: 40px;
        max-width: 526px;

        a {
        text-decoration: none;
        display: flex;
        color: aliceblue;
        }
    }

    h3 {
        font-family: "Electrolize", sans-serif;
        font-weight: normal;
        margin-top: 32px;
        margin-bottom: 32px;
        padding-top: 32px;
        font-size: 28px;
        color: #47b5de;
    }

    img {
        margin-right: 16px;
    }

    span {
        font-size: 12px;
        color: #6c7d8e;
    }

    p {
        font-size: 16px;
    }

    ul {
        margin-top: 24px;
        list-style: none;
        margin-right: auto;

        li {
        padding: 18px 16px;
        display: flex;
        border: 1px solid #47b5de;
        border-radius: 8px;
        margin-bottom: 24px;

        &:hover {
            transform: translateY(-1px);
        }
        }
    }

    form {
        padding: 16px 16px;
        border: 1px solid #47b5de;
        border-radius: 8px;
        width: 510px;

        ${ButtonStyled} {
        margin-top: 32px;
        width: 100%;
        height: 40px;
        }
    }

    @media (max-width: 1171px) {
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;

        .contactInfo {
        gap: 24px;
        }

        .textAndLinks {
        max-width: 330px;
        margin-right: 0;
        }

        form {
        width: 100%;
        max-width: 346px;
        box-sizing: border-box;

        input,
        textarea {
            width: 100%;
            box-sizing: border-box;
        }
        }
    }

    @media (max-width: 767px) {
        margin-left: 0;
        display: block;

        .contactInfo {
        display: block;
        }

        .textAndLinks {
        justify-self: center;
        margin-right: 0;
        max-width: 300px;
        }

        h3 {
        font-size: 24px;
        }

        p {
        font-size: 14px;
        }

        ul {
        li {
            margin-bottom: 40px;
        }
        }

        form {
        justify-self: center;
        max-width: 300px;

        input {
            max-width: 100%;
        }

        textarea {
            max-width: 100%;
        }

        ${ButtonStyled} {
            width: 100%;
        }
        }
    }
    `;

export const ProjectLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: block;
    `;
