import { Stack } from "./Stack";

let stack1 = new Stack<number>([]);

// stack1.pop();
console.log();
console.log(stack1.peek());
stack1.push(5);
console.log(stack1.peek());
console.log(stack1.isEmpty());
console.log(stack1.size());
