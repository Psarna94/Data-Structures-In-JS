/**
 * Created by reliance on 03-07-2015.
 */

function List(){
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  //this.clear = clear;
  this.find = find;
  this.toString = toString;
  //this.insert = insert;
  this.append = append;
  this.remove = remove;
  //this.front = front;
  //this.end = end;
  //this.prev = prev;
  //this.next = next;
  this.length = length;
  //this.currPos = currPos;
  //this.moveTo = moveTo;
  //this.getElement = getElement;
  //this.length = length;
  //this.contains = contains;
}
//this function adds an element to the list
function append(element){
  this.dataStore[this.listSize++] = element;
}

//this function finds an element from the list
function find(element){
  for(var i=0; i<this.dataStore.length; i++){
    if(this.dataStore[i] == element){
      return i;
    };
  };
  return -1;
};

//this function uses the find function to remove an element from the list
function remove(element){
  var foundAt = this.find(element);

  if(foundAt > -1){
    this.dataStore.splice(foundAt,1);
    this.listSize--;
    return true;
  };
  return false;
};

//return the current length of the list
function length(){
  return this.listSize;
};

//returns the contents of the lists
function toString(){
  return this.dataStore;
}



var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
console.log(names);
console.log(names.find("R"));
console.log(names);
