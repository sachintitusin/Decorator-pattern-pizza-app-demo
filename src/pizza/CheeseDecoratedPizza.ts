import { PizzaDecorator } from "./PizzaDecorator";

export class CheeseDecoratedPizza extends PizzaDecorator {
  getDescription(): string {
    return this.pizza.getDescription() + " + Cheese";
  }

  getCost(): number {
    return this.pizza.getCost() + 50;
  }
}
