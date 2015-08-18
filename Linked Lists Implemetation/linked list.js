'use strict'

function Node(element){
  this.element = element;
  this.next = null;
}

function LList (){
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.findPrevious = findPrevious;
}

// function to find an item in a list
function find(item){
  var currNode = this.head;
  while(currNode.element!==item){
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item){
  var newNode = new Node(newElement);
  var currNode = this.find(item);
  newNode.next = currNode.next;
  currNode.next = newNode;
}

function display(){
  var currNode = this.head;
  while(!(currNode.next === null)){
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

function findPrevious(item){
  var current= this.head;
  while(!(current.next==null) && !(current.next.element === item)){
    current = current.next;
  }
  return current;
}

function remove(item){
  var prevNode = this.findPrevious(item)
  if(prevNode.next !== null){
    prevNode.next = prevNode.next.next;
  }
}


var cities = new LList(); cities.insert("Conway", "head"); cities.insert("Russellville", "Conway"); cities.insert("Carlisle", "Russellville"); cities.insert("Alma", "Carlisle"); cities.display();
console.log();
// cities.remove("Carlisle");
cities.display();
