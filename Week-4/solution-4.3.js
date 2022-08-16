// Iterators 

const FibObj = {
  n: 6,
  [Symbol.iterator]: function () {
    let a = 0;
    let b = 0;
    let i = 1;
    return {
      next: () => {
        if (i++ < this.n) {
          [a, b] = [b, a + b || 1] //0, 1, 1, 2, 3
          return { value: a, done: false }
        } else {
          return { done: true }
        }
      }
    }
  }
}
for (let num of FibObj) {
  console.log(num)
}