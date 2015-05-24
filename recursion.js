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
