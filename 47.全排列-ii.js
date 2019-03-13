/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (50.82%)
 * Total Accepted:    7.9K
 * Total Submissions: 15.6K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,1,2]
 * 输出:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = []
    nums.sort((a, b) => {
        return a - b
    })
    res.push([nums[0]])
    for(let i = 1; i < nums.length; i ++) {
        let currentRes = []
        if(nums[i] != nums[i - 1]) {
            for(let j = 0; j < res.length; j ++) {
                for(let pos = 0; pos <= res[0].length; pos ++) {
                    currentRes.push(res[j].slice(0, pos).concat(nums[i]).concat(res[j].slice(pos,)))
                }
            }
            // 当重复时，只插入到重复位数后面的
        } else {
            for(let j = 0; j < res.length; j ++) {
                let startPos = 0
                for(let pos = res[0].length - 1;  pos >= 0; pos --) {
                    if(res[j][pos] === nums[i]) {
                        startPos = pos
                        break
                    }
                }
                for(let p = startPos+1; p <= res[0].length; p ++) {
                    currentRes.push(res[j].slice(0, p).concat(nums[i]).concat(res[j].slice(p,)))
                }
            }
        }
        res = currentRes
    }
    return res
};
/*
    解法在46的基础上进行改动
    先对数组排序，在遍历时能直接发现是否为重复数字

    对于重复数进，假设原数组为[a, b, a]

    当b插入数组时，只插入与之重复数字之后的位置能保证不重复，例如[a,b, **, a],[a,b,a **]。因此本地解法就是在46的基础上对于重复数字找到一个startPos。
*/