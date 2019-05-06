/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root, min=null, max=null) {
    if(root == null) return true
    if(((min === null) || root.val > min) && ((max === null) || root.val < max) && isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)) {
        return true
    }
    return false
};

