/**
 * Created by reliance on 30-06-2015.
 */

var factorials = function(num){
  if(num === 0){
    return 1
  }else{
    num = num*factorials(num-1);
  }

  return num;
}

console.log(factorials(6));

