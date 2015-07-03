/**
 * Created by reliance on 02-07-2015.
 */

function truncate(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num){
    str = str.substring(0,num)+"...";
  }else{
    str = str.substring(0,num);
  }

  return str;
}

console.log(truncate('A-tisket a-tasket A green and yellow basket', 11));

