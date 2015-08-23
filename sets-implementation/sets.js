function Set(){
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.union = union;
  this.intersect = intersect;
  this.subset = subset;
  this.difference = difference;
  this.show = show;
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
