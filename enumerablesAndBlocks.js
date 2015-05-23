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

// myInject
Array.prototype.myInject = function (callback) {
  var memo = this[0];
  this.slice(1).myEach(function(el){
    memo = callback(memo, el);
  });
  console.log(memo);
  return memo;
};

[1,2,3,4,5].myInject(function(memo, el){
  return memo + el;
});

// A function returns undefined if a value was not returned.
