function range (start, end) {
  if (start >= end) {
    return [];
  }
  if (start < end){
    return [start].concat(range(start+1, end));
  }
}

// console.log(range(5,1));

function exponentiation (base, power) {
  if (power <= 0){
    return 1;
  }
  if (power === 1){
    return base;
  }
  else {
    return base * exponentiation(base, power-1);
  }
}

// console.log(exponentiation(5, 3));

function fibonacci(n) {
  if (n <= 1){
    return [0];
  }
  if (n === 2){
    return [0, 1];
  }
  else{
    var prevFibs = fibonacci(n-1);
    var currentFib = prevFibs[prevFibs.length-1] + prevFibs[prevFibs.length-2];
    prevFibs.push(currentFib);
    return prevFibs;
  }
}

// console.log(fibonacci(5));

function binarySearch(array, target){

  if (array.length === 0 || (array.length === 1 && array[0] !== target)){
    return -1;
  }
  var midpoint = Math.floor(array.length/2);

  if (array[midpoint] === target){
    return midpoint;
  }
  if (array[midpoint] > target){
    return binarySearch(array.slice(0, midpoint), target);
  }
  if (array[midpoint] < target){
    var result = binarySearch(array.slice(midpoint+1), target);
    return (result === -1) ? -1 : result + midpoint + 1;
  }
}

// console.log(binarySearch([1, 2, 3], 1)); // # => 0
// console.log(binarySearch([2, 3, 4, 5], 3)); // # => 1
// console.log(binarySearch([2, 4, 6, 8, 10], 6)); // # => 2
// console.log(binarySearch([1, 3, 4, 5, 9], 5)); // # => 3
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // # => 5
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // # => nil
// console.log(binarySearch([1, 2, 3, 4, 5, 7], 6)); // # => nil
