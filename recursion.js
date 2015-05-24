function range (start, end) {
  if (start >= end) {
    return [];
  }
  if (start < end){
    return [start].concat(range(start+1, end));
  }
}

console.log(range(5,1));
