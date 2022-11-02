// test cases

const mathOperation = require("./solution-5.4");

test("sum of two numbers", () => {
  expect(mathOperation.sum(2, 2)).toBe(4)
})

test("difference of two numbers", () => {
  expect(mathOperation.difference(3, 2)).toBe(1)
})

test("product of two numbers", () => {
  expect(mathOperation.product(2, 2)).toBe(4)
})

