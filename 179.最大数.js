/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((x, y) => {
        return -parseInt((x + '' + y)) + parseInt((y + '' + x))
    })
    console.log(nums)
    if(nums[0] == 0) {
        return '0'
    }
    return nums.join("")
};

// js到sort函数有点奇怪