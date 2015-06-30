/**
 * Created by reliance on 30-06-2015.
 */
var findLongestWord = function(str){
  str = str.split(' ');


  var long = str.sort(function(a,b){
    return b.length- a.length;
  });

  return long[0];

};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
