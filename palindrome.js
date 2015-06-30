/**
 * Created by reliance on 30-06-2015.
 */
function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/ /g,"");

  str = str.replace(/,/g,'');

  str = str.replace(/\./g,'');

  var pal = str;

  if(str === pal.split("").reverse().join("")){
    return true;
  }else{
    return false;
  }

}

console.log(palindrome("A man, a plan, a canal. Panama"));
