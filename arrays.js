var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}

function addElementToEndOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return 0;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.splice(0,0);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function removeElementFromEndOfArray(array){
  return array;
}

function removeElementFromBeginningOfArray(array){
  array.splice(0,0);
  return array;
}
