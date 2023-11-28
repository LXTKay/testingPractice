const reverseString = require("./resverseString");

test("Is String reversed", ()=>{
  expect(reverseString("Reversed")).toBe("desreveR");
});