import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import mainTheme from "../../styles/mainTheme";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a Button component", () => {
  const text = "Test";
  const actionOnClick = vi.fn();

  describe("When it receives a text 'Test'", () => {
    test("Then it should show a button with 'Test' inside", async () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <Button type="button" classModifier="" text="Test" />
        </ThemeProvider>,
      );

      const button = screen.getByRole("button", {
        name: text,
      });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives an action and the user clicks the button", () => {
    test("Then it should call the received action", async () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <Button
            type="button"
            classModifier=""
            text="Test"
            actionOnClick={actionOnClick}
          />
          ,
        </ThemeProvider>,
      );

      const button = screen.getByRole("button", {
        name: text,
      });

      await userEvent.click(button);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
