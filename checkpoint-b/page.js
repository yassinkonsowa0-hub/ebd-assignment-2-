import { items } from "./items.js";

export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.className = "listing";
    li.textContent = `${item.name} (${item.category})`;
    ul.appendChild(li);
  });
}

export function matching() {
  return items.filter((item) => item.category === "stationery");
}

export function start() {
  renderItems(items);

  document
    .querySelector("#run-filter")
    .addEventListener("click", () => renderItems(matching()));
}
