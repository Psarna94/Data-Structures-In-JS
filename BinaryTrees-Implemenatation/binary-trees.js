
// Node Constructor for a binary tree
function Node(data, left, right){
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
};

// function to show the Node
function show(){
  return this.data
};

// constructor class for the BSTs
function BST(){
  this.root  = null;
  this.insert = insert;
  this.inOrder = inOrder;
}

// function to insert a node in the BST
function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  }
  else {
    var current = this.root; var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
               parent.left = n;
               break;
              }
            } else {
              current = current.right; if (current == null) {
               parent.right = n;
break; }
} }
} }

function inOrder (node){
  if(!(node == null)){
    inOrder(node.left);
    print(node.show()+" ");
    inOrder (node.right);
  }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
print("Inorder traversal: ");
inOrder(nums.root)
