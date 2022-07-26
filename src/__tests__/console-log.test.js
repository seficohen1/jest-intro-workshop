function callConsole(msg) {
  console.log(msg);
}

describe("console.log tests", () => {
  let logSpy = null;

  beforeAll(() => {
    logSpy = jest.spyOn(console, "log");
  });

  test("calls console.log with 'hello'", () => {
    const expected = "hello";
    callConsole(expected);

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(expected);
  });

  test("calls console.log with 'hello-world'", () => {
    const expected = "hello-world";
    callConsole(expected);

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(expected);
  });
});
