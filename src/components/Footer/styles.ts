import styled from "styled-components";

export const FooterStyled = styled.footer`
  max-width: 1171px;
  width: 100%;
  margin: 16px auto 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 15px;
  border-bottom: 1px solid #6c7d8e;
  padding-top: 64px;

  h2 {
    font-family: "Electrolize", sans-serif;
    font-weight: normal;
    font-size: 24px;
    white-space: nowrap;
  }

  img {
    margin-right: 20px;
  }

  @media (max-width: 767px) {
    max-width: 300px;  

    ul {
      gap: 16px;
    }
    img {
      max-width: 20px;
    }
  }

  @media (min-width: 768px) and (max-width: 1171px) {
    h2 {
      margin-left: 20px;

    }
    
  }
`;

export const CopyRight = styled.div`
  max-width: 1171px;
  width: 100%;
  margin: 16px auto 0;
  font-size: 12px;
  margin-bottom: 64px;

  @media (max-width: 767px) {
    max-width: 300px;
  }
`;
