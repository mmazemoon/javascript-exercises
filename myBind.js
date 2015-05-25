// myBind

Function.prototype.myBind = function(obj){
  var funky = this;
  return function(){
    return funky.apply(obj);
  };
};
