// Question 1
// Begin by defining a Node class for the individual nodes in the binary tree, each containing a value and pointers for the left and right nodes. Following this, write an inorder function that receives a tree's root node as an argument and prints the node values in an inorder sequence. To test your solution, establish a binary tree containing nodes with integer values [1,2,3,4,5]. Invoke the inorder function to check the output [4,2,5,1,3].

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

function printInorder(node) {
  if (node === null) {
    return;
  }

  // First recur on left subtree
  printInorder(node.left);

  // Now deal with the node
  console.log(node.data);

  // Then recur on right subtree
  printInorder(node.right);
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log('Inorder traversal of binary tree is: ');
printInorder(root);

// Create a Node class in JavaScript to build parts of a binary tree. Then, make an 'isSameTree' function. This function checks two binary trees and tells if they are the same or not. Test your function by making two binary trees and comparing them. For an input binary tree with nodes [1,2,3], 'isSameTree' should return 'true' for the same output [1,2,3] and 'false' otherwise.

class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

function identicalTrees(a, b) {
  // /*1. both empty */
  if (a == null && b == null) return true;

  /* 2. both non-empty -> compare them */
  if (a != null && b != null) return a.data == b.data && identicalTrees(a.left, b.left) && identicalTrees(a.right, b.right);

  /* 3. one empty, one not -> false */
  return false;
}

root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);

root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);

if (identicalTrees(root1, root2)) console.log('Both trees are identical');
else console.log('Trees are not identical');

// Develop a 'countNodes' function to calculate the total nodes in a binary tree, and build a TreeNode class for a binary tree in JavaScript. For complete trees, it uses the formula 2^h - 1. Verify the function using a given root tree. For a binary tree input with nodes [10,11,12,13,14,15,16], the 'countNodes' function should yield an output of 7.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function totalNodes(root) {
  if (root === null) {
    return 0;
  }

  let l = totalNodes(root.left);
  let r = totalNodes(root.right);

  return 1 + l + r;
}

function newNode(data) {
  return new Node(data);
}

let root = newNode(10);
root.left = newNode(11);
root.right = newNode(12);
root.left.left = newNode(13);
root.left.right = newNode(14);
root.right.left = newNode(15);
root.right.right = newNode(16);
console.log(totalNodes(root));


// Find the leftmost value in the last row of a binary tree with distinct node values. Use the TreeNode class, which defines a node's structure. Implement the 'searchBottomLeftValue(root)' function, taking the root of the binary tree as input. This function should return the value of the leftmost node in the last row of the tree. Test your function by using a binary tree with nodes [2,1,3,4,5,6] as input. The 'searchBottomLeftValue(root)' function should then return an output of 6.


class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

let maxLevel = -1;
let res = -1;

function find(root,level)
{
  if (root != null)
      {
          find(root.left, ++level);

          if (level > maxLevel)
          {
              res = root.data;
              maxLevel = level;
          }

          find(root.right, level);
      }
}

function deepestNode(root)
{
      find(root, 0);
      return res;
}

function newNode(data) {
  return new Node(data);
}

let root = newNode(2);
root.left = newNode(1);
root.right = newNode(3);
root.left.left = newNode(4);
root.right.left = newNode(5);
root.right.left.left = newNode(6);
console.log(deepestNode(root))