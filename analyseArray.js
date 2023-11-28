"use strict"

function analyseArray(arr){
  let expObject ={};
  expObject.min = arr[0];
  expObject.max = arr[0];
  expObject.length = arr.length;
  let sum = 0;
  arr.forEach(element => {
    sum+= element;
    if(element < expObject.min) expObject.max = element;
    if(element > expObject.max) expObject.max = element;
  });
  expObject.average = sum / arr.length;

  return expObject;
};


module.exports = analyseArray