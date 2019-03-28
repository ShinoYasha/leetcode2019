/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (54.45%)
 * Total Accepted:    20.2K
 * Total Submissions: 37.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其层次遍历结果：
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
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
var levelOrder = function(root) {
    let ans = []
    let res = [root]
    let deep = 0
    if(root == null) {
        return ans
    }
    while(res.length != 0) {
        let curLength = res.length
        for(let i = 0; i < curLength; i ++) {
            // 从res中拿数据
            let cur = res.pop()
            if(cur != []) {
                if(!ans[deep]) {
                    ans[deep] = []
                }
                console.log(`${deep}  ${cur.val}`)
                ans[deep].push(cur.val)
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

