export interface IStack<T> {
  push(elem: T, tab: T[]): void;
  pop(tab: T[]): void;
  peek(tab: T[]): T;
  isEmpty(tab: T[]): boolean;
  size(tab: T[]): number;
}
