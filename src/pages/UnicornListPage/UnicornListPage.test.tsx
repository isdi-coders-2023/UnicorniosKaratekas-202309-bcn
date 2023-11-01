import { render, screen } from "@testing-library/react";
import UnicornListPage from "./UnicornListPage";
import UnicornProviderWrapper from "../../components/features/unicorns/store/UnicornProviderWrapper";

describe("Given the unicorns list page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with the text 'Unicorns List'", () => {
      const expectedHeadingTitle = "Unicorns List";

      render(
        <UnicornProviderWrapper>
          <UnicornListPage />
        </UnicornProviderWrapper>,
      );

      const headingElement = screen.getByText(expectedHeadingTitle);

      expect(headingElement).toBeInTheDocument();
    });
  });
});
