import $ from "jquery";
import { makeList } from "../utils/dom";

describe("DOM", () => {
  beforeEach(() => {
    // we need to build a virtual dom first
    document.body.innerHTML = `<div class='wrapper'></div>`;
  });

  test("adds list to the DOM", () => {
    const elements = [
      { textContent: "Monday", class: "list-item" },
      { textContent: "Tuesday", class: "list-item" },
    ];

    makeList(elements);

    expect($(".wrapper ul").children.length).toBe(2);
    expect($(".list-item").eq(0).text()).toBe(elements[0].textContent);
    expect($(".list-item").eq(1).text()).toBe(elements[1].textContent);
  });
});
