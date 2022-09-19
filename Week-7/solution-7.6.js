//Implement Queue using 2 stacks

var Stack1 = [];
var Stack2 = [];


function Enqueue(element) {
  Stack1.push(element);
}

function Dequeue() {
  if (Stack2.length === 0) {
    if (Stack1.length === 0) { return 'Cannot dequeue because queue is empty'; }
    while (Stack1.length > 0) {
      var p = Stack1.pop();
      Stack2.push(p);
    }
  }
  return Stack2.pop();
}

Enqueue(1);
Enqueue(2);
Enqueue(3);
Enqueue(2);
Enqueue(1);
Enqueue(4);
Enqueue(2);
console.log(Dequeue()); 
console.log(Dequeue()); 