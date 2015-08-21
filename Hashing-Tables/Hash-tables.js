"use strict";

function HashTable(){
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
  this.betterHash = betterHash;
  // this.get = get;
}

// a hashing function
function simpleHash(data){
  var total = 0;
  for(var i=0; i<data.length; i++){
    total += data.charCodeAt(i);
  }
  var total =  total% this.table.length;
  return total;
}

// a better hashing function which causes less collisions using Horner's method
  function betterHash(string){
    var H = 37;
    var total = 0;
    for (var i=0; i< string.length; i++){
      total += total*H + string.charCodeAt(i);
    }
    total = total % this.table.length;
    return parseInt(total);
  }



// put a value inside a hash table
function put(data){
  var pos = this.betterHash(data);
  this.table[pos]=data;
}

function showDistro(){
  for(var i=0; i<this.table.length; i++){
    if(this.table[i] !== undefined){
      console.log(i + ":" + this.table[i] );
    }
  }
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]; var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) { hTable.put(someNames[i]);
}
hTable.showDistro();
