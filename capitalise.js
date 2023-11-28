"use strict"

function capitalise(input){
  if(typeof input !== "string") return "Not a string";
  if(input == "") return "String Empty";
  let output = input.slice(0,1).toUpperCase() + input.slice(1, input.length);
  return output;
};


module.exports = capitalise;