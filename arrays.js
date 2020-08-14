var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(){
  return ["foo", ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(){
  return chocolateBars.unshift(1);
}

function addElementToEndOfArray(){
  return [...chocolateBars, "foo"];
}

function destructivelyAddElementToEndOfArray(){
  return chocolateBars.unshift(1);
}
