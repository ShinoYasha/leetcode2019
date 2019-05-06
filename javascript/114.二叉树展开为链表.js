/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let cur = root
    while(cur) {
        if(cur.left) {
            pre = cur.left
            while(pre.right) {
                pre = pre.right
            }
            pre.right = cur.right
            cur.right = cur.left
            cur.left = null
        }
        cur = cur.right
    }
};

