// construcot function for the Queue
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
