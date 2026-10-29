// 12-dom-write: my work

// Finds the card whose <h3> says `name`. Returns undefined if there is none.
function findCard(name) {
  return Array.from(document.querySelectorAll("#list .card")).find(
    (card) => card.querySelector("h3")?.textContent === name
  );
}

export function addProduct(name, price) {
  const card = document.createElement("li");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = name;

  const priceTag = document.createElement("p");
  priceTag.className = "price";
  priceTag.textContent = `${price} EGP`;

  card.appendChild(title);
  card.appendChild(priceTag);
  document.querySelector("#list").appendChild(card);
}

export function removeProduct(name) {
  const card = findCard(name);
  if (card) {
    card.remove();
  }
}

export function markSoldOut(name) {
  const card = findCard(name);
  if (card) {
    card.classList.add("sold-out");
  }
}

export function clearProducts() {
  document.querySelectorAll("#list .card").forEach((card) => card.remove());
}

export function wireButtons() {
  document
    .querySelector("#add")
    .addEventListener("click", () => addProduct("Notebook", 45));
  document
    .querySelector("#reset")
    .addEventListener("click", () => clearProducts());
}