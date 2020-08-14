var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(){
  ["hersheys", ...chocolateBars];
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(){
  chocolateBars.push("hersheys");
  return chocolateBars
}

["hersheys", ...chocolateBars];

chocolateBars.push("hersheys");

[...chocolateBars, "hersheys"];

chocolateBars.unshift("hersheys");
