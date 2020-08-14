var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(){
  return ["foo", ...chocolateBars];
}
addElementToBeginningOfArray();

function destructivelyAddElementToBeginningOfArray(){
  return chocolateBars.unshift(1);
}
destructivelyAddElementToBeginningOfArray();

function addElementToEndOfArray(){
  return [...chocolateBars, "foo"];
}
addElementToEndOfArray();

function destructivelyAddElementToEndOfArray(){
  return chocolateBars.unshift(1);
}
destructivelyAddElementToEndOfArray();
