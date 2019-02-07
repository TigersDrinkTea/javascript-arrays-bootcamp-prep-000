var 

function addElementToBeginningOfArray (array, element) {
  return `${array}, ${[...array, element]}`
}

function destructivelyAddElementToBeginningOfArray (array, element)