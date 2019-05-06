/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let l = nums.length
    if(l == 1) { return nums[0] }
    let min = nums[0]
    let max = nums[0]
    let res = nums[0]
    for(let i = 1; i < l; i ++) {
        let temp = max
        max = Math.max(Math.max(nums[i], max * nums[i]), min * nums[i])
        min = Math.min(Math.min(nums[i], temp * nums[i]), min * nums[i])
        res = Math.max(res, max)
    }
    return res
};

