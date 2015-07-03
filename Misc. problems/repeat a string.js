/**
 * Created by reliance on 02-07-2015.
 */

function repeat(str, num) {
  // repeat after me

  var a =[];

  if (num < 0){
    return "";
  }else{
    while(a.length < num ){
      a.push(str);
    }

    str = a.join('');
  }
  return str;
}

repeat('abc', 3);
