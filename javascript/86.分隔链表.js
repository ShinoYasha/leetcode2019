/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(head == null || head.next == null) {
        return head
    }
    let cur = head
    let preMin =  new ListNode()
    let preMax =  new ListNode()
    let curMin = preMin
    let curMax = preMax
    // let curMin = new ListNode()
    // ÷let curMax = new ListNode()
    while(cur != null) {
        if(cur.val < x) {
            console.log(1)
            curMin.next = cur
            curMin = curMin.next
        } else {
            console.log(2)
            console.log(curMax)
            curMax.next = cur
            curMax = curMax.next
        }
        cur = cur.next
    }
    curMin.next = preMax.next
    curMax.next = null
    return preMin.next
};

