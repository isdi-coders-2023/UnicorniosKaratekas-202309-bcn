import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it receives an image with alt property: 'My Little Padding Logo' ", () => {
    test("Then it should show an image with that alt property", () => {
      const alt = "My Little Padding Logo";

      render(<Header />);

      const header = screen.getByAltText(alt);

      expect(header).toBeInTheDocument();
    });
  });
});
