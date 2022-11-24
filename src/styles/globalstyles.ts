import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media(max-width: 1440px){
       /* font-size: 93.75%; */
    }

    @media(max-width: 375px){
       /* font-size: 87.5% */
    }
}

body {
    -webkit-font-smoothing: antialiased;
}

body {
    font-family: "Heebo", sans-serif;
}
:root {

    --space-light: #3D68B2;

    --space-dark: #040327;

    --space: #0B1E8A;

    --gray-02: #2C2D3A;

    --gray-03: #60616F;

    --gray-04: #898A93;

    --gray-05: #D5D5DB;

    --mars: #E85937;

    --mars-light: #FF8C70;

    --mars-dark: #CF3F1D;

    --sun: #F5D15F;

    --jupiter: #E00E34;

    --earth: #0FDD86;

    --saturn: #554AD7;

    --uranus: #24FF39;
}
`



