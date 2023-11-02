import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it receives an image with the alt property 'page is loading icon with a unicorn'", () => {
    test("Then it should show a unicorn image", () => {
      render(<Loading />);

      const expectedText = "page is loading icon with a unicorn";
      const loadingPage = screen.getByAltText(expectedText);

      expect(loadingPage).toBeInTheDocument();
    });
  });
});
