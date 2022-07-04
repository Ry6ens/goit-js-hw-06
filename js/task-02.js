const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngridients = document.querySelector("#ingredients");
const itemIngridient = document.createElement("li");
itemIngridient.classList.add("item");
itemIngridient.textContent = "Potatoes";
listIngridients.append(itemIngridient);

// for (let i = 0; i < ingredients.length; i++) {
//   console.log(i);
//   document.createElement("li").textContent = ingredients[i];
// }

for (const key of ingredients) {
  console.log(key);
  itemIngridient.classList.add("item");
  itemIngridient.textContent = key;
  listIngridients.append(itemIngridient);
}
