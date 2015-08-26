// function to get minimum value within a BST

function getMin(){
  var current = this.root;
  while(!(current.left == null)){
    current = current.left;
  }
  return current.data;
}

// function to get max value within a BST
function getMax(){
  var current = this.root;
  while(!(current.right == null)){
    current = current.right;
  }
  return current.data;
}

function find(data){
  var current = this.root;
  while(current.data !=data){
    if(data< current.data){
      current = current.left;
    }else{
      current = current.right;
    }
    if(current == null){
      return null;
    }
  }
  return current;
}
