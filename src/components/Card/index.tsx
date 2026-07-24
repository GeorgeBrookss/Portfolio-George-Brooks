import {CardStyled, CardImage} from "./styles"

type Props = {
    title: string;
    description: string;
    image: string;
};

function Card( {title, description, image}: Props) {

    return (
        <>
        <CardImage $image={image} />
        <CardStyled>
            <h3>{title}</h3>
            <p>
                {description} 
            </p>
        </CardStyled>
        </>
    )
}

export default Card