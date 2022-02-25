import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders Greeting as a text", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ... nothing

  // Assert
  const helloElement = screen.getByText("Hello Michel!");
//   const helloElement = screen.getByText("Hello Michel", { exact: false });
  expect(helloElement).toBeInTheDocument();
});
