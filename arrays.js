var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var chocolate = "foo"

function addElementToBeginningOfArray(chocolateBars, chocolate){
  return [chocolate, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, chocolate){
  chocolateBars.unshift(chocolate);
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, chocolate){
  return [...chocolateBars, chocolate];
}

function destructivelyAddElementToEndOfArray(chocolateBars, chocolate){
  chocolateBars.push(chocolate);
  return chocolateBars
}
function accessElementInArray(chocolateBars, index){
  return (chocolateBars[2]);
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars){
  chocolateBars.slice(0);
  return chocolateBars
}