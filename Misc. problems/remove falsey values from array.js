/**
 * Created by pranusarna on 28/07/15.
 */
function bouncer(arr) {

    function removeFalsey(value){
        return value !== false;
        return value !== null;
        return value !== 0;
    }

    var newArr = arr.filter(removeFalsey);
    return newArr;
}

console.log(bouncer(['a', 'b', 'c']));