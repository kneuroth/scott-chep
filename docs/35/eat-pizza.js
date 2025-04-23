function eatPizza() {
  var pizzasAte = 0;
  pizza = document.getElementById("eat-pizza");
  pizzaEnd = pizza.src.slice(-5);
  pizzaNumber = parseInt(pizza.src.slice(-5, -4));
  newPizzaNumber = pizzaNumber + 1 == 10 ? 0 : pizzaNumber + 1;
  pizza.src = pizza.src.replace(pizzaEnd, newPizzaNumber + ".png");
}
