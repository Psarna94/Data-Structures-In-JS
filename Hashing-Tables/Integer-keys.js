// Forming a Hash function for Integer Keys
function HashTable(){
  this.table = new Array(137);
  // this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
  // this.betterHash = betterHash;
  // this.get = get;
}

function showDistro(){
  for(var i=0; i<this.table.length; i++){
    if(this.table[i] !== undefined){
      console.log(i + ":" + this.table[i] );
    }
  }
}

function put(data){
  var pos = this.betterHash(data);
  this.table[pos]=data;
}


function getRandomInt(min, max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function genStuData(arr){
  for(var i=0; i<arr.length; i++){
    var num ="";
    for(var j=0; j<9; j++){
      num += Math.floor(Math.random()*10);
    }
    num += getRandomInt(50,100);
    arr[i] = num;
  }
}

var numStudents = 10;
var arrSize = 97;
var idLen = 9;
var students = new Array(numStudents);
genStuData(students);
console.log("Student data: \n");
for (var i = 0; i < students.length; ++i) {
   console.log(students[i].substring(0,8) + " " +
         students[i].substring(9));
}
console.log("\n\nData distribution: \n");
var hTable = new HashTable();
for (var i = 0; i < students.length; ++i) {
   hTable.put(students[i]);
}
hTable.showDistro();
