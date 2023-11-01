import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with the text 'Unicorns List' in it", () => {
      const expectedHeadingText = "Unicorns List";

      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );

      const headingElement = screen.getByText(expectedHeadingText);

      expect(headingElement).toBeInTheDocument();
    });
  });
});
