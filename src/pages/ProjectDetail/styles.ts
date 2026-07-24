import styled from "styled-components";
import { Link } from "react-router-dom";

interface ContainerProps {
  $background?: string;
}

export const Container = styled.main<ContainerProps>`
  width: 100%;
  min-height: calc(100vh - 200px);
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: ${({ $background }) =>
    $background ? `url(${$background})` : "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 767px) {
    padding: 20px 16px;
  }
`;

export const BackLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  text-decoration: none;

  button {
    background-color: #141415;
  }

  @media (min-width: 768px) and (max-width: 1116px) {
    justify-content: center;
    margin-right: 31%;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1076px;
  width: 100%;
  gap: 24px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  @media (min-width: 768px) and (max-width: 1116px) {
    justify-content: center;
  }

`;

export const ProjectImage = styled.img`
  max-width: 526px;
  width: 100%;
  height: 526px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #eae9e96c;

  @media (max-width: 767px) {
    max-width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
  }
`;

export const DetailsContent = styled.div`
  background-color: #141415;
  width: 526px;
  border: 1px solid #114c9a;
  border-radius: 8px;
  padding: 24px;
  height: 700px;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    padding: 20px 16px;
  }
`;

export const TechsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

export const ProjectDescription = styled.p`
  margin-top: 20px;
  line-height: 1.6;
  font-size: 0.95rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 16px;
  margin-top: 20px;
  justify-content: center;
  width: 100%;

  a {
    text-decoration: none;
    color: aliceblue;
    font-weight: 500;
    transition: opacity 0.2s ease;
    width: 100%;

    &:hover {
      opacity: 0.8;
    }

    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  }

  img {
    display: block;
  }
`;
