import { PlainPizza } from "./pizza/PlainPizza";
import { CheeseDecoratedPizza } from "./pizza/CheeseDecoratedPizza";
import { OliveDecoratedPizza } from "./pizza/OliveDecoratedPizza";
import { PepperoniDecoratedPizza } from "./pizza/PepperoniDecoratedPizza";
import type { Pizza } from "./pizza/Pizza";

let pizza: Pizza | null = null;

const app = document.getElementById("app")!;

function render() {
  app.innerHTML = `
    <h1>🍕 Pizza POS</h1>
    <button id="create">Create Base Pizza</button>
    <button id="cheese">Add Cheese</button>
    <button id="olive">Add Olives</button>
    <button id="pepperoni">Add Pepperoni</button>

    <h3>Order</h3>
    <p>${pizza ? pizza.getDescription() : "No pizza yet"}</p>
    <h2>Total: ₹${pizza ? pizza.getCost() : 0}</h2>

    <button id="checkout">Checkout</button>
  `;

  document.getElementById("create")!.onclick = () => {
    pizza = new PlainPizza();
    render();
  };

  document.getElementById("cheese")!.onclick = () => {
    if (pizza) pizza = new CheeseDecoratedPizza(pizza);
    render();
  };

  document.getElementById("olive")!.onclick = () => {
    if (pizza) pizza = new OliveDecoratedPizza(pizza);
    render();
  };

  document.getElementById("pepperoni")!.onclick = () => {
    if (pizza) pizza = new PepperoniDecoratedPizza(pizza);
    render();
  };
}

render();
