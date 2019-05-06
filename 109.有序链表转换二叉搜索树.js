/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(head === null) { return null }
    if(head.next === null) {return new TreeNode(head.val)}
    let slow = head
    // console.log(head)
    let fast = head.next.next
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    let cur = slow.next
    console.log(cur.next)
    slow.next = null
    let res = new TreeNode(cur.val)
    // console.log(head)
    res.left = sortedListToBST(head)
    res.right = sortedListToBST(cur.next)
    // console.log(cur.next)
    return res
};
// sortedListToBST([-10,-3,0,5,9])
// 少了个let，cur变为全局属性了！！！真的蠢
