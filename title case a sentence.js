/**
 * Created by reliance on 30-06-2015.
 */
var titleCase = function(str){
  str = str.split(' ');

  //str.forEach(function(foo){
  //  var bar = foo.split('');
  //  bar[0] = bar[0].toUpperCase();
  //  var a = bar.join('')
  //  return a ;
  //});

  for(var i=0; i<str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase();
  }

  console.log(str);
}

console.log(titleCase("this is pranu"));

