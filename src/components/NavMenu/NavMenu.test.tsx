import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavMenu from "./NavMenu";
import { BrowserRouter } from "react-router-dom";

describe("Given a Navigation Menu component", () => {
  describe("When it rendered", () => {
    test("Then it should show a background image with the alternative text 'navigation menu background'", () => {
      const expectedAlternativeText = "navigation menu background";

      render(
        <BrowserRouter>
          <NavMenu />
        </BrowserRouter>,
      );

      const navBackgroundImage = screen.getByAltText(expectedAlternativeText);

      expect(navBackgroundImage).toBeInTheDocument();
    });
  });
});
