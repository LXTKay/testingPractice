const capitalise = require("./capitalise");

test("Makes capital:", ()=>{
  expect(capitalise("test")).toBe("Test");
});

test("Empty:", ()=>{
  expect(capitalise("")).toBe("String Empty");
});