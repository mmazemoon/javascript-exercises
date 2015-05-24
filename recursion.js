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

console.log(fibonacci(5));
