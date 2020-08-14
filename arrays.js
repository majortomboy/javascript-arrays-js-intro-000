var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(){
  return ["foo", ...chocolateBars];
}
addElementToBeginningOfArray("foo");

function destructivelyAddElementToBeginningOfArray(){
  return chocolateBars.unshift();
}
destructivelyAddElementToBeginningOfArray("hershey");

function addElementToEndOfArray(){
  return [...chocolateBars, "foo"];
}
addElementToEndOfArray();

function destructivelyAddElementToEndOfArray(){
  return chocolateBars.unshift();
}
destructivelyAddElementToEndOfArray(1);
