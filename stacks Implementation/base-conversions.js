/**
 * Created by pranusarna on 25/07/15.
 */
// constructor function for stacks
function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
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
//clear the stack
function clear(){
    this.top = 0;
}


function mulBase(num, base) { var s = new Stack();
    do{
        s.push(num % base);
        num = Math.floor(num /= base); } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted; }

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum); num = 125;
base = 8;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);
