/**
 * Created by reliance on 01-07-2015.
 */
function largestOfFour(arr) {
  // You can do this!

  Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  var array = [];
  arr.forEach(function(foo){
    var bar = foo.max();
    array.push(bar);
  });
  return array;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
