import {TagStyled} from "./styles"


interface TagsProps {
    tech: string;
}

function Tags({tech}: TagsProps) {
    return(
        <TagStyled>{tech}</TagStyled>
    )
}

export default Tags;
