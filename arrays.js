
// my uniq

Array.prototype.myUniq = function () {
  var result = [];
  this.forEach(function (el) {
    if (result.indexOf(el) === -1) {
      result.push(el);
    }
  });
  console.log(result);
  return result;
};

// [1, 2, 1, 3, 3].myUniq();

// twoSum

Array.prototype.twoSum = function () {
  var result = [];
  for(var i = 0; i < this.length - 1; i++) {
    for(var j = i + 1; j < this.length; j++) {
        if (this[i] + this[j] === 0) {
          result.push([i,j]);
        }
    }
  }
  console.log(result);
  return result;
};

// [-1, 0, 2, -2, 1].twoSum();

Array.prototype.myTranspose = function () {
  var result = [];
  for (var i = 0; i < this[0].length; i++) {
      result[i] = [];
  }
  for(var i = 0; i < this.length; i++) {
    for(var j = 0; j < this[i].length; j++) {
      result[j][i] = this[i][j];
    }
  }
  console.log(result);
  return result;
};


[ [1, 2],
  [3, 4],
  [5, 6 ]].myTranspose();

[ [1, 3, 5 ],
  [2, 4, 6]].myTranspose();
