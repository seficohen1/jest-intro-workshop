/**
 * Write the assertions using the .toBe() matcher
 */
describe("02-exercises", () => {
  test("the variable `hello` is the same as 'hello-world'", () => {
    const hello = "hello-world";

    expect.assertions(1);

    // Finish the test
  });
  test("the variable `hello` is not the same as 'hola-mundo'", () => {
    const hello = "hello-world";

    expect.assertions(1);

    // Finish the test
  });
  test("user1 is the same as user2", () => {
    expect.assertions(1);

    const user1 = { name: "ana", phone: 678876567 };
    const user2 = user1;

    // Finish the test
  });
  test("user1 is not the same as user3", () => {
    expect.assertions(1);

    const user1 = { name: "ana", phone: 678876567 };
    const user3 = { name: "ana", phone: 678876567 };

    // Finish the test
  });
});
