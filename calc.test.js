const calculator = require("./calc");

test("add", ()=>{
  expect(calculator.add(3,3)).toBe(6);
});

test("subtract", ()=>{
  expect(calculator.subtract(3,3)).toBe(0);
});

test("divide", ()=>{
  expect(calculator.divide(3,3)).toBe(1);
});

test("multiply", ()=>{
  expect(calculator.multiply(3,3)).toBe(9);
});