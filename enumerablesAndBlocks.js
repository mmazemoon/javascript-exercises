// myEach
Array.prototype.myEach = function (callback) {
  for(var i = 0; i < this.length; i++){
    callback(this[i]);
  }
  return this;
};

// myMap
Array.prototype.myMap = function (callback){
  var result = [];
  this.myEach (function (el) {
    result.push(callback(el));
  });
  console.log(result);
  return result;
};

var integers = [1, 2, 3, 4];
integers.myMap(function(i){ return i*i; }); // => [1, 4, 9, 16]
