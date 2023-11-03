import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import UnicornListPage from "./UnicornsListPage";
import UnicornProviderWrapper from "../../features/unicorns/store/UnicornProviderWrapper";
import mainTheme from "../../styles/mainTheme";

describe("Given the unicorns list page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with the text 'Unicorns List'", () => {
      const expectedHeadingTitle = "Unicorns List";

      render(
        <UnicornProviderWrapper>
          <ThemeProvider theme={mainTheme}>
            <UnicornListPage />
          </ThemeProvider>
        </UnicornProviderWrapper>,
      );

      const headingElement = screen.getByText(expectedHeadingTitle);

      expect(headingElement).toBeInTheDocument();
    });
  });
});
