# Writing Tests - The Three "A"s

1. Arrange -> Set up the test data, test conditionals and test environment
2. Act -> Run logic that should be tested (e.g. execute function)
3. Assert -> Compare execution results with expected results

# Testing Suites - To organize and group different tests

- Using `npm test` to run
- Using `describe('Name component', () => {})`
- Using `userEvent` in library `@testing-library/user-event` to simulate the click event
- Using `screen.getByRole('button')` to get the button element
  Ex:

```js
import userEvent from "@testing-library/user-event";
// ...
describe("Component", () => {
    test('...', () => {
        // ...
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
        // ...
    })
}

```

- Using `screen.queryByText(text)` return null if the element not found, and the `expect(element).tobeNull()` (Checking `Greeting.test.js` file)

# Testing connection

Checking `Output.js` file

- The test is still working if we split to the child component

# Testing Asynchronous code

Ex:

```js
import { render, screen } from "@testing-library/react";
import { Async } from "./Async";

// Using useEffect & fetch to get the fake posts API
describe("Async component", () => {
  test("renders post if request succeeds", async () => {
    render(<Async />);

    const listItemElement = await screen.findAllByRole("listitem";
    expect(listItemElement).not.toHaveLength(0);
  });
});
```

# Working with Mock

```js
window.fetch = jest.fn();
window.fetch.mockResolvedValueOnce({
  json: async () => [{ id: "p1", title: "First post" }],
});
```
LINK:
- https://jestjs.io/docs/getting-started
- https://testing-library.com/docs/react-testing-library/intro/
- https://github.com/testing-library/react-hooks-testing-library