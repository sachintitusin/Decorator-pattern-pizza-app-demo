import { PizzaDecorator } from "./PizzaDecorator";

export class PepperoniDecoratedPizza extends PizzaDecorator {
  getDescription(): string {
    return this.pizza.getDescription() + " + Pepperoni";
  }

  getCost(): number {
    return this.pizza.getCost() + 80;
  }
}
