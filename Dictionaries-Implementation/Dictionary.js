function Dictionary(){
  this.dataStore = new Array();
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
}

function add(key, value){
  this.dataStore[key] = value;
}

function find(key){
  return this.dataStore[key];
}

function remove(key){
  delete this.dataStore[key];
}

function showAll(){
  console.log(this.dataStore);
}

var pbook = new Dictionary();
 pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: " + pbook.find("David")); 
pbook.showAll();
