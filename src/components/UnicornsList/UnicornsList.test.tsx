import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import UnicornProviderWrapper from "../../features/unicorns/store/UnicornProviderWrapper";
import UnicornsList from "./UnicornsList";

describe("Given a UnicornList component", () => {
  describe("When it receives some unicorns", () => {
    test("Then it should show a list of unicorns", () => {
      render(
        <UnicornProviderWrapper>
          <ThemeProvider theme={mainTheme}>
            <UnicornsList />
          </ThemeProvider>
        </UnicornProviderWrapper>,
      );

      const unicornName = screen.getByTitle("unicorns-list");

      expect(unicornName).toBeInTheDocument();
    });
  });
});
