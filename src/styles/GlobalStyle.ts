import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, ::before, ::after {
  box-sizing: border-box;
}

html {
  font-family: ${({ theme }) => theme.typography.mainFontFamily};
}

body {
  margin: 0;
  background-image: url("/images/background.webp");
  background-repeat: repeat-y;
  background-size: cover;
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

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
`;

export default GlobalStyle;
