import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, ::before, ::after {
  box-sizing: border-box;
}

body {
  margin: 0;
}

ul,
li {
    margin: 0;
    padding: 0;
    list-style: none;
  } 

a {
  text-decoration: none;
  color: inherit;
}

button,
input {
  font-family: inherit;
  }

h1,
h2 {
  margin: 0;
  }

button {
   cursor: pointer;
}
`;
export default GlobalStyle;
