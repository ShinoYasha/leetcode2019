/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (40.08%)
 * Total Accepted:    9.1K
 * Total Submissions: 22.6K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
 * 
 * 示例 1:
 * 
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->1->2->3
 * 输出: 2->3
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head == null || head.next == null) {
        return head
    }
    let start = new ListNode()
    start.next = head
    let p = start
    // q作为遍历指针，如果q.next.val = q.val，则再判断q是不是头节点
    let q = head
    while(q.next) {
        if(q.next.val != q.val) {
            if(p.next == q) {
                p = q
            } else {
                p.next = q.next
            }
        }
        q = q.next
        console.log(p)
    }
    if(p.next != q) {
        p.next = q.next
    }
    return start.next
};

