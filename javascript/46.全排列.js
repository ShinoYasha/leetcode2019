/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (66.64%)
 * Total Accepted:    16.3K
 * Total Submissions: 24.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // 返回数组
    let res = []
    // 从第一位开始初始化
    let first = [nums[0]]
    res.push(first)
    // 从第二位开始遍历数组
    for(let i = 1; i < nums.length; i ++) {
        // 因为res中的数组及时更新，且数组的子数组长度相同，取第一个的长度得到新的位数可以插入的位置
        let insertPos = res[0].length
        // 记录新位数来时的返回数组，用于覆盖res
        let currentRes = []
        for(let j = 0; j < res.length; j ++) {
            for(let pos = 0; pos <= insertPos; pos ++) {
                currentRes.push(res[j].slice(0,pos).concat(nums[i]).concat(res[j].slice(pos,)))
            }
        }
        res = currentRes
    }
    return res
};
/*
    可能是插件的原因，test的时候因为返回数组顺序的问题会不通过，submit的时候就通过了。

    采取的方法：
    比如数组[1,2,3],遍历数组,遍历到第一位得到[1]，第二位的插入方式只有两种，[1，2]，[2，1]，第三位的数字插入位置有3种，且从得到的数组中插入。
    因此不会有重复···
*/

