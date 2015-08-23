function Set(){
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.union = union;
  this.intersect = intersect;
  // this.subset = subset;
  // this.difference = difference;
  this.show = show;
  this.contains = contains;
}

// a set can only store unique members therefore applying a check
function add(data){
  if(this.dataStore.indexOf(data)<0){
    this.dataStore.push(data);
    return true;
  }
  else{
    return false;
  }
};

// similar to add function checking for index and then removing
function remove(data){
  if(this.dataStore.indexOf(data)<0){
    return false;
  }else{
    this.dataStore.splice(this.dataStore.indexOf(data), 1);
    return true
  }
};

function show(){
  return this.dataStore;
}

// Helper function to find if a data memebr is contained in te set
function contains(data){
  if(this.dataStore.indexOf(data)> -1){
    return true;
  }else{
    return false;
  }
};

// find the union between two sets
function union(set){
    var tempSet = new Set();
    this.dataStore.forEach(function(i){
      tempSet.add(i);
    });

    set.dataStore.forEach(function(foo){
      if(!tempSet.contains(foo)){
        tempSet.dataStore.push(foo)
      }
    })

    return tempSet;
}

// finds the intersection between sets
function intersect(set){
  var tempSet = new Set();
  this.dataStore.forEach(function(foo){
    if (set.contains(foo)){
      tempSet.add(foo);
    }
  })

  return tempSet;
}


var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Bryan");
it = cis.intersect(dmp);

console.log(it.show());
