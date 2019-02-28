/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (32.61%)
 * Total Accepted:    86K
 * Total Submissions: 263.7K
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 * 
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // add为进位标识，cur为当前位值
    let add = 0, cur = 0
    let val1, val2
    // 新建链表，head.next为实际返回链表
    let head = new ListNode(0)
    // 方便每次往链表尾端添加制
    let tempNode = head
    while(l1 || l2 || add) {
        // 记录当前位值
        val1 = l1 ? l1.val : 0
        val2 = l2 ? l2.val : 0 
        cur = (val1 + val2 + add) % 10
        add = (val1 + val2 + add >= 10) ? 1 : 0
        tempNode.next = new ListNode(cur)
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
        tempNode = tempNode.next
    }
    return head.next
};

