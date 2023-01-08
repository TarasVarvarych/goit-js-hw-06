const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");

const ingredientMarkupAdder = () => {
  for (let ingredient of ingredients) {
    let item = document.createElement("li");
    item.textContent = ingredient;
    item.classList.add("item");
    listOfIngredients.append(item);
  }
};

ingredientMarkupAdder(ingredients);
console.log(listOfIngredients);
