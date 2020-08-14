var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(){
  ["foo", ...chocolateBars];
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(){
  chocolateBars.push("foo");
  return chocolateBars
}

function addElementToEndOfArray(){
  [...chocolateBars, "foo"];
  return chocolateBars
}

function destructivelyAddElementToEndOfArray(){
  chocolateBars.unshift("foo");
  return chocolateBars
}
