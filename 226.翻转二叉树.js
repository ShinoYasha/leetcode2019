/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root == null) {
        return root
    }
    let tempRoot = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(tempRoot)
    return root
};

var invertTree = function(root) {
    if(root == null) { return root }
    let stack = [root]
    while(stack.length > 0) {
        let currentNode = stack.pop()
        if(currentNode.left) {
            stack.push(currentNode.left)
        }
        if(currentNode.right) {
            stack.push(currentNode.right)
        }
        temp = currentNode.left
        currentNode.left = currentNode.right
        currentNode.right = temp
    }
    return root
}
