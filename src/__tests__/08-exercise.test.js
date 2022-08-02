import { calculator, increment } from "../utils/math";

/**
 * Write the assertions using the most appropriate matcher
 */
describe("08-exercises", () => {
  let addSpy = null;

  beforeAll(() => {
    // 1. Spy on the 'add' method of the calculator object
    //    and save the spy in the `addSpy` variable
    addSpy = jest.spyOn(calculator, "add");
  });

  afterAll(() => addSpy.mockRestore());

  test("increment calls the calculator add method", () => {
    /**
     * 2. Execute the `increment` by passing the arguments: (4, 5, calculator)
     */
    increment(4, 5, calculator);

    // You should make 2 assertions in this test, see bellow
    expect.assertions(2);

    // 3. Make an assertion that the addSpy has been called 1 time
    expect(addSpy).toBeCalledTimes(1);

    // 4. Make an assertion that the addSpy has been called with the
    // numbers 4 and 5
    expect(addSpy).toHaveBeenCalledWith(4, 5);
  });
});
