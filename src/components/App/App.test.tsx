import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import App from "./App";
import UnicornProviderWrapper from "../../features/unicorns/store/UnicornProviderWrapper";
import mainTheme from "../../styles/mainTheme";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with the text 'Unicorns List' in it", async () => {
      const expectedHeadingText = "Unicorns List";

      render(
        <UnicornProviderWrapper>
          <BrowserRouter>
            <ThemeProvider theme={mainTheme}>
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </UnicornProviderWrapper>,
      );

      const headingElement = screen.getByText(expectedHeadingText);

      expect(await headingElement).toBeInTheDocument();
    });
  });
});
