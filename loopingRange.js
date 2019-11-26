/*
Looping Range
Assignment
*/

/*
creating an array of every even number from 0 to 100. In this challenge,
 we will build a function that creates an array like this for a given start, end, and step parameter.
*/

function range(start, end, step){
  let array = []
  if(start < end && step > 0){
    array.push(start);
    for(var i = 1; array[i - 1] + step <= end; i++){
      array[i] = array[i -1] + step;
    } 
  }return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
