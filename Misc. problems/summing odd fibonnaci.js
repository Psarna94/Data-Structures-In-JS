function sumPrimes(num) {
  var primes = [];
  var list = [];

  function isPrime(num) {
  for (var c = 2; c <= Math.sqrt(num); ++c)
    if (i % c === 0) return false;
  return true;
}

function primeList(num) {

   for (var i = 2; i != num; ++i)
     if (isPrime(i)) list.push(i);

}


  // arr.forEach(function(foo){
  //   function checkPrime
  //   for(var i=2; i<foo; i++){
  //     if(foo%i != 0){
  //       return false;
  //     }else{
  //       return true;
  //     }
  //   }
  // })


  //   primes = primes.reduce(function(a,b){
  //   return a+b;
  // })
  return list;
}

console.log(sumPrimes(10));
