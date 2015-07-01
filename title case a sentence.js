/**
 * Created by reliance on 30-06-2015.
 */
var titleCase = function(str){


  str = str.toLowerCase();
  var matches = str.replace(/\b(\w)/g, function(m){
    return m.toUpperCase();
  });

 if(matches.charAt(2) == matches.charAt(2).toUpperCase()){
  matches =  matches.replace(matches.charAt(2), matches.charAt(2).toLowerCase());
 }else{
   return false;
 }

  return matches;
}

console.log(titleCase("I'm a little tea pot"));

