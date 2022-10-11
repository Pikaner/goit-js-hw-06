const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector("#ingredients");

function createLi(text) {
  let li = document.createElement('li');
  li.classList.add('item');
  li.textContent = text;
  return li;
}

const menu = ingredients.map((li) => {
  return createLi(li);
});

ingredientsEl.append(...menu);
console.log(ingredientsEl);
