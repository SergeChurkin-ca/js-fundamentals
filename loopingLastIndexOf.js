/*
Looping - lastIndexOf
Assignment


Building a function that determines the last index of an item in an array.

*/


function lastIndexOf(list, num)  {
  let foundMatch = false;
  let index;
  for (var i = list.length - 1; i >= 0; i--) {
    if (list[i] === num) {
      index = i;
      foundMatch = true;
      break;
    }
  }
  if (index >= 0) {
    return index;
  } else {
    return -1;
  }
}

