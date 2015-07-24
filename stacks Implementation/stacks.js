// constructor function for stacks
function Stack(){
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
}

// function to push an element to the top of stack
function push(ele){
  this.dataStore[this.top++] = ele;
}

// function to remove and return an element from the top of the stack
function pop(){
  this.dataStore[this.top--];
}

// function to access the top element of the stack
function peek(){
  return this.dataStore[this.top - 1];
}

// function to get the length of the stack
function length(){
  return this.top;
}

function clear(){
  this.top = 0;
}


var s = new Stack(); s.push("David"); s.push("Raymond"); s.push("Bryan");
// console.log("length: " + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
// s.clear();
// console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());
