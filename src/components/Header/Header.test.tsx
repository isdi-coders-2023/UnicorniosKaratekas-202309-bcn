import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an image with the alternative text 'My Little Padding Logo", () => {
      const expectedAltText = "My Little Padding Logo";

      render(<Header />);

      const header = screen.getByAltText(expectedAltText);

      expect(header).toBeInTheDocument();
    });
  });
});
