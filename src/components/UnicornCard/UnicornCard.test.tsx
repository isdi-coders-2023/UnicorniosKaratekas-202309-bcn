import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import UnicornCard from "./UnicornCard";
import mainTheme from "../../styles/mainTheme";
import UnicornProviderWrapper from "../../features/unicorns/store/UnicornProviderWrapper";
import { unicornMock } from "../../data/mockData";

describe("Given a UnicornCard component", () => {
  describe("When it receives a unicorn data", () => {
    test("Then it should show the unicorn's name into a heading", () => {
      const expectedUnicornName = unicornMock;

      render(
        <UnicornProviderWrapper>
          <ThemeProvider theme={mainTheme}>
            <UnicornCard unicorn={unicornMock} />
          </ThemeProvider>
        </UnicornProviderWrapper>,
      );

      const unicornName = screen.getByRole("heading", {
        name: expectedUnicornName.name,
      });

      expect(unicornName).toBeInTheDocument();
    });
  });
});
