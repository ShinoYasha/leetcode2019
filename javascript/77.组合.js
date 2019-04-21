/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (66.50%)
 * Total Accepted:    9.6K
 * Total Submissions: 14.4K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 
 * 示例:
 * 
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(n < k) {
        return []
    }
    let nums = []
    let res = []
    inner(n, k, nums, 1, res)
    return res
    function inner(n, k, nums, start, res) {
        // 如果k = nums.length，则只有一种
        // console.log(nums.length)
        // console.log(k)
        if(k === nums.length) {
            res.push(nums)
            // console.log(res)
        } else {
            for(let i = start; i <= n-(k-nums.length)+1; i ++) {
                let new1 = nums.concat(i)
                // console.log(nums)
                inner(n, k, new1, i+1, res)
                // nums.pop()
            }
        }

    }
};

