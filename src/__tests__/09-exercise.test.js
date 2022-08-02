import { calculator, increment } from "../utils/math";

/**
 * Write the assertions using the most appropriate matcher
 */
describe("09-exercises", () => {
  let addSpy = null;

  beforeAll(() => {
    // 1. Spy on the 'add' method of the calculator object
    //    and save the spy in the `addSpy` variable
  });

  // 2. Clear the mock calls to the addSpy so that the tests work
  beforeEach(() => {});

  // 3. Restore the initial implementation of the addSpy using .mockRestore()

  test("increment returns 10 for 7 + 3", () => {
    let result = null;

    /**
     * 4. Execute the `increment` function by passing the arguments: (7, 3, calculator)
     *    and store the result in the `result` variable
     */

    // You should make 3 assertions in this test, see bellow
    expect.assertions(3);

    // 5. Make an assertion that the `result` is 10

    // 6. Make an assertion that the addSpy has been called 1 time

    // 7. Make an assertion that the addSpy has been called with the
    //    numbers 7 and 3
  });

  test("increment returns 15 for 10 + 5", () => {
    let result = null;

    /**
     * 8. Execute the `increment` function by passing the arguments: (10, 5, calculator)
     *    and store the result in the `result` variable
     */

    // You should make 3 assertions in this test, see bellow
    expect.assertions(3);

    // 9. Make an assertion that the `result` is 15

    // 10. Make an assertion that the addSpy has been called 1 time

    // 11. Make an assertion that the addSpy has been called with the
    //     numbers 10 and 5
  });
});
