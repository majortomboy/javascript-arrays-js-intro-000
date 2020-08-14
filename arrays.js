var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var chocolate = "foo"

function addElementToBeginningOfArray(chocolateBars, chocolate){
  return [chocolate, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, chocolate){
  return chocolateBars.unshift(chocolate);
}
chocolateBars.unshift(chocolate)

function addElementToEndOfArray(chocolateBars, chocolate){
  return [...chocolateBars, chocolate];
}

function destructivelyAddElementToEndOfArray(chocolateBars, chocolate){
  return chocolateBars.push(chocolate);
}
chocolateBars.push(chocolate)