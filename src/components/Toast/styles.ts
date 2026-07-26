import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
    `;

const slideOut = keyframes`
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-100%);
        opacity: 0;
    }
`;

export const ToastStyled = styled.div<{ $type: "success" | "error"; $closing: boolean }>`
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    min-width: 280px;
    padding: 12px 16px;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;

    background-color: ${({ $type }) => ($type === "success" ? "#10B981" : "#EF4444")};
    color: #ffffff;

    animation: ${({ $closing }) => ($closing ? slideOut : slideIn)} 0.3s ease-in-out forwards;

    .toast-content {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
        color: inherit;
        opacity: 0.8;
        transition: opacity 0.2s;

        &:hover {
            opacity: 1;
        }
    }
`;