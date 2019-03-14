/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 *
 * https://leetcode-cn.com/problems/maximum-product-of-three-numbers/description/
 *
 * algorithms
 * Easy (42.73%)
 * Total Accepted:    4.8K
 * Total Submissions: 11.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 *
 * 示例 1:
 *
 *
 * 输入: [1,2,3]
 * 输出: 6
 *
 *
 * 示例 2:
 *
 *
 * 输入: [1,2,3,4]
 * 输出: 24
 *
 *
 * 注意:
 *
 *
 * 给定的整型数组长度范围是[3,10^4]，数组中所有的元素范围是[-1000, 1000]。
 * 输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let sortNums = nums.sort(function(a, b) {
        return b - a
    })
    return Math.max(
        sortNums[0] * sortNums[1] * sortNums[2],
        sortNums[0] *
            sortNums[sortNums.length - 1] *
            sortNums[sortNums.length - 2]
    )
}
