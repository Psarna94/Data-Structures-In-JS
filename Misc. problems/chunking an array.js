/**
 * Created by reliance on 02-07-2015.
 */
function chunk(arr, size) {
  // Break it up.
  var foo = size;
  var i = 0;
  var newArray = [];
  while(arr.length >= size){
    arr1 = arr.slice(i,size);
    i = i + foo;
    size = size + foo;

    newArray.push(arr1);
  }
  return newArray;
}

console.log(chunk(['a', 'b', 'c', 'd','e','f'], 2));
