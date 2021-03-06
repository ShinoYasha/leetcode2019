/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (59.12%)
 * Total Accepted:    11.5K
 * Total Submissions: 19.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 *
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回其自底向上的层次遍历为：
 *
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 *
 *
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
var levelOrderBottom = function(root) {
    let res = [root]
    let ans = []
    if (root == null) {
        console.log('1')
        return ans
    }
    while (res.length != 0) {
        let curLength = res.length
        let ins = []
        for (let i = 0; i < curLength; i++) {
            let cur = res.pop()
            if (cur) {
                ins.push(cur.val)
                if (cur.left) {
                    res.unshift(cur.left)
                }
                if (cur.right) {
                    res.unshift(cur.right)
                }
            }
        }
        ans.unshift(ins)
    }
    return ans
}
