const ceasarCypher = require("./ceasarCypher");

test("ceasar cypher general", ()=>{
  expect(ceasarCypher("Penis", 4)).toBe("Tirmw");
});

test("ceasar cypher wrap", ()=>{
  expect(ceasarCypher("XYZ", 2)).toBe("ZAB");
});

test("ceasar cypher punctuation", ()=>{
  expect(ceasarCypher("A.B", 2)).toBe("C.D");
});

test("ceasar cypher punctuation + extreme case", ()=>{
  expect(ceasarCypher("A.B......", 52)).toBe("A.B......");
});