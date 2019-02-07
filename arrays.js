var chocolateBars = [ "snickers", "hundred grand", "kitkat", and "skittles"'];

function addElementToBeginningOfArray (array, element) {
  return `${array}, ${[...array, element]}`
}

function destructivelyAddElementToBeginningOfArray (array, element)