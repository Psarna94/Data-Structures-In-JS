/**
 * Created by pranusarna on 28/07/15.
 */
function mutation(arr) {

    var second = arr.splice(1,2);
    var first = arr.toString().toLowerCase();
    second = second.toString().toLowerCase();
    first = first.split('');
    second = second.split('');
    var counterfalse = 0;

    second.forEach(function(foo){
        if(first.indexOf(foo) == -1){
            counterfalse++ ;
        }
    })

    if(counterfalse>0){
        return false;
    }else{
        return true;
    }
}

console.log(mutation(['hey', 'hello']);