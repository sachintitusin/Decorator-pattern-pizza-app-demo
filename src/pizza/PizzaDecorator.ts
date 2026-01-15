import { Pizza } from "./Pizza";

export abstract class PizzaDecorator implements Pizza {
  constructor(protected readonly pizza: Pizza) {}

  abstract getDescription(): string;
  abstract getCost(): number;
}
