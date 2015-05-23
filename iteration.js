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

[5,4,3,2,1].bubbleSort();
