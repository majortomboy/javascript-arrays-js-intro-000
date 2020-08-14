var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var chcocolate = "hershey"
function addElementToBeginningOfArray(chocolate){
  return [chocolate, ...chocolateBars];
}
addElementToBeginningOfArray();

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
