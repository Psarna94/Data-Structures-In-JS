'use strict';

function Node(element){
  this.element=element;
  this.next = null;
  this.previous = null;
}

function LList (){
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.remove = remove;
}

function find(item){
  var currNode = this.head;
  while(currNode.element != item){
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item){
  var newNode = new Node(newElement);
  var currNode = this.find(item);
  newNode.next = currNode.next;
  newNode.previous = currNode;
  currNode.next = newNode;
}

function remove(item){
  var currNode = this.find(item);
  if(currNode.next !=null){
    currNode.next.previous = currNode.previous;
    currNode.previous.next = currNode.next;
    currNode.next = null;
    currNode.previous = null;
  }
}
