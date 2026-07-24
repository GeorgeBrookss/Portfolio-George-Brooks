import { BorderStyled } from "../Header/styles"
import {FooterStyled, CopyRight} from "./styles"
import FooterIcons from "../FooterIcons/index"

function Footer () {
    return (
        <>
        <BorderStyled />
        <FooterStyled>
            <h2>George B.</h2>
            <nav>
                <FooterIcons />
            </nav>
        </FooterStyled>
        <CopyRight>
            <p>&copy; 2026, George Brooks </p>
        </CopyRight>
        </>
    )
}

export default Footer