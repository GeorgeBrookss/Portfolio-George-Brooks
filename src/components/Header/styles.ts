import styled from "styled-components";

interface HeaderStyledProps {
  $isOpen: boolean;
}

export const HeaderStyled = styled.header<HeaderStyledProps>`
  max-width: 1171px;
  width: 100%;
  margin: 16px auto 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 16px;

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-family: "Electrolize", sans-serif;
    font-weight: normal;
    font-size: 24px;
    white-space: nowrap;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 48px;

    ul {
      display: flex;
      list-style: none;
      gap: 48px;

      a {
        text-decoration: none;
        color: inherit;
      }

      li {
        font-size: 16px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: 100%;
    padding: 12px 16px;
    box-sizing: border-box;

    nav {
      display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
      flex-direction: column;
      align-items: center;
      gap: 24px;

      position: absolute;
      top: 100%;
      left: 16px;
      right: 16px;
      margin: 12px 0 0 0;
      width: calc(100% - 32px);
      padding: 32px 16px;
      box-sizing: border-box;

      background-color: #121214;
      border: 1px solid #114c9a;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
      z-index: 100;

      ul {
        flex-direction: column;
        align-items: center;
        gap: 24px;
        padding: 0;
      }
    }
  }
`;

export const MenuToggle = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: #00e5ff;
  cursor: pointer;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BorderStyled = styled.div`
  width: 100vw;
  border: 1px solid #114c9a;
  box-shadow:
    0 0 10px #114c9a,
    0 0 20px #114c9a,
    0 0 40px #114c9a,
    0 0 80px #114c9a;
`;
