"use strict";

function ceasarCypher(string, shiftFactor){
  let arr = string.split("");
  let shiftedArray = []
  arr.forEach((item, index, array) => {
    let char = item.charCodeAt();
    if(char >= 97 && char <= 122){
      shiftedArray.push(shift(char, shiftFactor, 97, 122));
    } else if (char >= 65 && char <= 90){
      shiftedArray.push(shift(char, shiftFactor, 65, 90));
    } else {
      shiftedArray.push(item);
    };
  });
  return shiftedArray.join("");
};

function shift(char, shiftFactor, min, max){
  while(shiftFactor > 26){
    shiftFactor -= 26;
  };
  while(shiftFactor < 0){
    shiftFactor += 26
  };
  char += shiftFactor;
  if(char < min) char += 26;
  if(char > max) char -= 26;
  return String.fromCodePoint(char);
};

module.exports = ceasarCypher;