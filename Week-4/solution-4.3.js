// Iterators 

const FibObj = (n) => ({
  [Symbol.iterator]: function () {
    let a = 0;
    let b = 0;
    let i = 1;
    return {
      next: () => {
        if (i++ < n) {
          [a, b] = [b, a + b || 1] 
          return { value: a, done: false }
        } else {
          return { done: true }
        }
      }
    }
  }
});

for (let num of FibObj(6)) {
  console.log(num)
}