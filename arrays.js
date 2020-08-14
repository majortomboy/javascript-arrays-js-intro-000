var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(){
  ["hersheys", ...chocolateBars];
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(){
  chocolateBars.push("hersheys");
  return chocolateBars
}

function addElementToEndOfArray(){
  [...chocolateBars, "hersheys"];
  return chocolateBars
}

function destructivelyAddElementToEndOfArray(){
  chocolateBars.unshift("hersheys");
}

[...chocolateBars, "hersheys"];

chocolateBars.unshift("hersheys");
