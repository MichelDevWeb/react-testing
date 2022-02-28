import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// Using describe to making testing suites
describe("Greeting component", () => {
  test("renders Greeting as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloElement = screen.getByText("Hello Michel!");
    //const helloElement = screen.getByText("Hello Michel", { exact: false });
    expect(helloElement).toBeInTheDocument();
  });

  test('renders "tell me something" if the button was NOT clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText("tell me something", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "tell me something" if the button was clicked', () => {
    // Arrange
    render(<Greeting />)

    // Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    // Assert
    const outputElement = screen.queryByText('tell me something', {exact: false})
    expect(outputElement).toBeNull();
  })
});
