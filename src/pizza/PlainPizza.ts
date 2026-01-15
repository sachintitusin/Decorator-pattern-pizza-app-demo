import { Pizza } from "./Pizza";

export class PlainPizza implements Pizza {
  getDescription(): string {
    return "Plain Pizza";
  }

  getCost(): number {
    return 200;
  }
}
