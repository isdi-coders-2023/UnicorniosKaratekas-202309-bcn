import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "@fontsource/libre-baskerville";
import "@fontsource/libre-baskerville/400.css";
import "@fontsource/libre-baskerville/400-italic.css";
import GlobalStyle from "./styles/GlobalStyle";
import App from "./components/App/App";
import mainTheme from "./styles/mainTheme";
import UnicornProviderWrapper from "./features/unicorns/store/UnicornProviderWrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UnicornProviderWrapper>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </UnicornProviderWrapper>
  </React.StrictMode>,
);
