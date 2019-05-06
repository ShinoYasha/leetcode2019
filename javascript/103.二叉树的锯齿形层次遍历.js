/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let ans = []
    let res = [root]
    let deep = 0
    if(root == null) {
        return ans
    }
    while(res.length) {
        let curLength = res.length
        for(let i = 0; i < curLength; i ++) {
            let cur = res.pop()
            if(cur != []) {
                if(!ans[deep]) {
                    ans[deep] = []
                }
                if(deep % 2 === 1) {
                    ans[deep].unshift(cur.val)
                } else {
                    ans[deep].push(cur.val)
                }
                if(cur.left != null) {
                    res.unshift(cur.left)
                }
                if(cur.right != null) {
                    res.unshift(cur.right)
                }
            }
        }
        deep ++
    }
    return ans
};

