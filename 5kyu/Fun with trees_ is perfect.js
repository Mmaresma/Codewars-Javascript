//JavaScript: 5 kyu - Fun with trees: is perfect
//https://www.codewars.com/kata/57dd79bff6df9b103b00010f

class TreeNode {

  constructor(left = null, right = null) {
    this.left = left;
    this.right = right;
  }

  static isPerfect(rootNode) {
    if (!rootNode) return true;
    if (TreeNode.countChildren(rootNode.left) !== TreeNode.countChildren(rootNode.right)) return false;
    return TreeNode.isPerfect(rootNode.left) && TreeNode.isPerfect(rootNode.right);
  }
  
  static countChildren(rootNode) {
    if (!rootNode) return 0;
    return 1 + TreeNode.countChildren(rootNode.left) + TreeNode.countChildren(rootNode.right);
  }
  
  static leaf() {
    return new TreeNode();
  }
  
  static join(left, right) {
    return new TreeNode().withChildren(left, right);
  }
  
  withLeft(left) {
    this.left = left;
    return this;
  }

  withRight(right) {
    this.right = right;
    return this;
  }

  withChildren(left, right) {
    this.left = left;
    this.right = right;
    return this;
  }

  withLeftLeaf() {
    return this.withLeft(TreeNode.leaf());
  }

  withRightLeaf() {
    return this.withRight(TreeNode.leaf());
  }

  withLeaves() {
    return this.withChildren(TreeNode.leaf(), TreeNode.leaf());
  }
  
}
