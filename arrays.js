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
  array =array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function removeElementFromEndOfArray(array){
  array = array.slice(-1);
  return array;
}
