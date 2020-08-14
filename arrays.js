var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var chocolate = "foo"

function addElementToBeginningOfArray(chocolateBars, chocolate){
  return [chocolate, ...chocolateBars];
}
addElementToBeginningOfArray();

function destructivelyAddElementToBeginningOfArray(chocolateBars, chocolate){
  return chocolateBars.unshift(chocolate);
}
destructivelyAddElementToBeginningOfArray();

function addElementToEndOfArray(chocolateBars, chocolate){
  return [...chocolateBars, chocolate];
}
addElementToEndOfArray();

function destructivelyAddElementToEndOfArray(chocolateBars, chocolate){
  return chocolateBars.shift(chocolate);
}
destructivelyAddElementToEndOfArray();
