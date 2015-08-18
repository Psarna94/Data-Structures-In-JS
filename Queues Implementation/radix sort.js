// construcot function for the Queue
"use strict";

function Queue(){
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

// function to add data to queue
function enqueue(elem){
  return this.dataStore.push(elem);
}

// function to remove element from queue
function dequeue(){
  return this.dataStore.shift();
}

// function to get first element of Queue
function front(){
  return this.dataStore[0];
}

// function to get last element of Queue
function back(){
  return this.dataStore[this.dataStore.length - 1];
}

// get the contents of a queue
function toString(){
  var reStr = "";
  for(var i=0; i<this.dataStore.length; i++){
    reStr = reStr + this.dataStore[i] + "\n"
  }

  return reStr;
}

// check if the array is empty
function empty(){
  if(this.dataStore.length === 0){
    return true;
  }else{
    return false;
  }
}

// function to distribute numbers into bins based on their digits
function distribute(nums, queues, n, digit){

  for(var i=0; i<n; i++){
    if(digit===1){
      queues[nums[i]%10].enqueue(nums[i]);
    }else{
      queues[Math.floor(nums[i]/10)].enqueue(nums[i]);
    }
  }

}

// function to attain the list of numbers from the queues
function collect(){
  var i = 0;
  for(var digit = 0; digit<10; digit++){
    while(!queues[digit].empty()){
      nums[i++] = queues[digit].dequeue;
    }
  }
}

// function to display all the elements of an array
function dispArray(arr){
  arr.forEach(function(foo){
    console.log(foo);
  });
}

//generate queues or bins for each digit
var queues = [];
for(var i=0; i<10; i++){
  queues[i] = new Queue();
}

// generate random numbers to perform radix sort on
var nums = [];
for(var i=0; i<10; i++){
  nums[i] = Math.floor(Math.floor(Math.random()*101));
}

dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
console.log("after first sort");
dispArray(nums);
// distribute(nums, queues, 10, 10);
// collect(queues, nums);
// console.log("after first sort");
// dispArray(nums);
