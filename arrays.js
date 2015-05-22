
// my uniq

Array.prototype.myUniq = function () {
  result = [];
  this.forEach(function (el) {
    if (result.indexOf(el) === -1) {
      result.push(el);
    }
  })
  console.log(result);
  return result;
};

[1, 2, 1, 3, 3].myUniq();
