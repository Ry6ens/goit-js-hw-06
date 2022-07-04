const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (let i = 0; i < ingredients.length; i++) {
  const listIngridients = document.querySelector("#ingredients");
  const itemIngridient = document.createElement("li");
  listIngridients.append(itemIngridient);
  itemIngridient.classList.add("item");
  itemIngridient.textContent = ingredients[i];
}
