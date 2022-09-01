//Solution - 4

function createStack() {
  let items = [];
    return {
      get(){
        return items;
      },
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      },
    };
}

const stack = createStack();

console.log(stack.get());

console.log(stack.push(10));
console.log(stack.push(5));

console.log(stack.get());
console.log(stack.pop()); // => 5
console.log(stack.items); // => undefined
