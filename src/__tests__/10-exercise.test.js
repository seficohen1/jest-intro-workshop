import { addButton } from "../utils/dom";

/**
 * Write the assertions using the most appropriate matcher
 */
describe("10-exercises", () => {
  beforeAll(() => {
    // 1. set the default inner html of the document body
    //    to have a div with a class of .wrapper
    // const div = document.createElement('div')
    // div.className = 'wrapper'
    document.body.innerHTML ='<div class="wrapper"></div>'
  });

  test("adds a button to the dom", () => {
    // You should make 1 assertion in this test, see bellow
    expect.assertions(1);

    const btnText = "Save";

    // 2. execute the addButton function and pass it as an argument
    //    the `btnText` variable
        addButton(btnText)
    // 3. use document.querySelector to get the new button
    //    the `addButton` creates a button with a class of .btn
    //    that you can use in document.querySelect  or
      const button = document.querySelector('.btn')
    // 4. make an assertion that the buttons textContent is
    //    the same as the `btnText` variable
    expect(button.textContent).toBe(btnText)
  });
});
