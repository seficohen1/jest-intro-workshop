import * as math from "../utils/math";
import * as calculator from "../utils/calculator";

let addSpy = null;

beforeAll(() => {
  addSpy = jest.spyOn(math, "add");
});

afterAll(() => {
  console.log(addSpy.mock.calls);
});

test("calculator.js calls math.add", () => {
  calculator.calculatorAdd(1, 2);

  expect(addSpy).toHaveBeenCalledWith(1, 2);
});
