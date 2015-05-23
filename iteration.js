// bubbleSort
Array.prototype.bubbleSort = function () {
  if(this.length === 0){
    return this;
  }
  var unsorted = true;
  while (unsorted){
    unsorted = false;
    for(var i = 0; i < this.length -1; i++){
      if(this[i] > this[i+1]){
        var temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
        unsorted = true;
      }
    }
  }
  console.log(this);
  return this;
};

// [5,4,3,2,1].bubbleSort();

// subStrings
String.prototype.substrings = function () {
  var result = [];
  for(var i = 0; i < this.length; i++){
    var substr = this[i];
    result.push(substr);
    for(var j = i + 1; j < this.length; j++){
            substr += this[j];
            result.push(substr);
    }
  }
  console.log(result);
  return result;
};

"cat".substrings();

// j being an index vs. j being an offset.
