/**
 * Created by reliance on 30-06-2015.
 */
var reverseString = function(str){
  str = str.split("").reverse().join("");
  return str;
};

console.log(reverseString("Functional programming rocks"));
