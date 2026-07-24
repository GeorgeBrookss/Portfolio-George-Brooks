import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

    body {
        justify-self: center;
        background-color: #141415;
        color: #F7FEFF;
        font-family: "Roboto", sans-serif;        
    }

`

export default GlobalStyle
