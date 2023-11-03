import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import NavMenu from "./NavMenu";

describe("Given a Navigation Menu component", () => {
  describe("When it rendered", () => {
    test("Then it should show a background image with the alternative text 'navigation menu background'", () => {
      render(
        <BrowserRouter>
          <NavMenu />
        </BrowserRouter>,
      );

      const navigation = screen.getByRole("navigation");

      expect(navigation).toBeInTheDocument();
    });
  });
});
