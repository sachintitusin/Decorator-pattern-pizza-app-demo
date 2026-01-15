import { PizzaDecorator } from "./PizzaDecorator";

export class OliveDecoratedPizza extends PizzaDecorator {
  getDescription(): string {
    return this.pizza.getDescription() + " + Olives";
  }

  getCost(): number {
    return this.pizza.getCost() + 40;
  }
}
