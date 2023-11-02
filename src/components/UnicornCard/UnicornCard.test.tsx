import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import UnicornCard from "./UnicornCard";
import mainTheme from "../../styles/mainTheme";
import UnicornProviderWrapper from "../../features/unicorns/store/UnicornProviderWrapper";

describe("Given a UnicornCard component", () => {
  describe("When it receives a unicorn data", () => {
    test("Then it should show the unicorn's name into a heading", () => {
      const expectedUnicornName = {
        id: 42,
        name: "Mr. Shy",
        alias: "Pinkamena Diane Pie",
        url: "https://mlp.fandom.com/wiki/Mr._and_Mrs._Shy",
        sex: "Male",
        residence: "Cloudsdale",
        occupation: "Weather factory worker (formerly)",
        kind: ["Pegasus"],
        image: [
          "https://vignette.wikia.nocookie.net/mlp/images/2/2d/Mr._Shy_ID_S6E11.png/revision/latest?cb=20160605103050",
        ],
      };

      render(
        <UnicornProviderWrapper>
          <ThemeProvider theme={mainTheme}>
            <UnicornCard unicorn={expectedUnicornName} />
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
