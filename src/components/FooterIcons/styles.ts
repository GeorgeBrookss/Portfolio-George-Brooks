import styled from "styled-components";

type IconsListProps = {
    gap?: string;
};

export const IconsList = styled.ul<IconsListProps>`
    display: flex;
    list-style: none;
    gap: ${({ gap }) => gap || "48px"};

    li {
        &:hover {
            cursor: pointer;
        }
    }
`;