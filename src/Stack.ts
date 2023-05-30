import { IStack } from "./LIFO";

export class Stack<T> implements IStack<T> {
  private _pile: T[];
  constructor(pile: T[]) {
    this._pile = pile;
  }
  push(elem: T): void {
    this._pile.push(elem);
  }

  pop(): void {
    if (this.isEmpty()) {
      throw new Error("La pile est vide !");
    } else this._pile.pop();
  }

  peek(): T {
    return this._pile[this._pile.length - 1];
  }

  isEmpty(): boolean {
    return this._pile.length === 0;
  }

  size(): number {
    return this._pile.length;
  }
}
