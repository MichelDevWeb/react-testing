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

