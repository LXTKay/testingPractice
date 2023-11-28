"use strict"

function reverseString(input){
  let arr = input.split("");
  let output = [];
  for(let i = arr.length; i >= 0; i--){
    output.push(arr[i]);
  }
  return output.join("")
};

module.exports = reverseString;