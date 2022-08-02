export function makeList(elements) {
  const wrapper = document.querySelector(".wrapper");
  const ul = document.createElement("ul");

  elements.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element.textContent;
    li.classList.add(element.class);
    ul.appendChild(li);
  });

  wrapper.appendChild(ul);
}

export function addButton(btnTxt) {
  const wrapper = document.querySelector(".wrapper");

  const button = document.createElement("button");
  button.textContent = btnTxt;
  button.classList.add("btn");

  wrapper.appendChild(button);
}
