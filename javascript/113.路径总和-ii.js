/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let res = []
    getPathSum(root, 0, [])
    return res
    function getPathSum(root, total, cur) {
        if(root == null) {
            return
        }
        console.log(cur)
        if(root.val + total === sum && !root.left && !root.right) {
            res.push(cur.concat(root.val))
        }
        if(root.left) {
            // cur.push(root.left)
            getPathSum(root.left, root.val+total, cur.concat(root.val))
        }
        if(root.right) {
            // cur.push(root.right)
            getPathSum(root.right, root.val+total, cur.concat(root.val))
        }
    }  
};

