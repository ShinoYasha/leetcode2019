/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (32.19%)
 * Total Accepted:    31.1K
 * Total Submissions: 96.1K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 * 
 * 说明：
 * 
 * 给定的 n 保证是有效的。
 * 
 * 进阶：
 * 
 * 你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
   let fast = head
   let slow = head
   while(n > 0) {
       fast = fast.next
       n --
   }
   if(fast === null) {
       return head.next
   }
   while(fast.next) {
       fast = fast.next
       slow = slow.next
   }
   slow.next = slow.next.next
   return head
};

/*
    双指针，快指针比慢指针领先n个身位。
    当删除长度为n的倒数第n个节点时，fast直接为null，此时为边界条件需要单独判断
*/
