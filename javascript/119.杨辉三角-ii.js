/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode-cn.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (54.12%)
 * Total Accepted:    10.8K
 * Total Submissions: 19.9K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 *
 *
 *
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 *
 * 示例:
 *
 * 输入: 3
 * 输出: [1,3,3,1]
 *
 *
 *
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 *
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = []
    //res[rowIndex] = 1
    for(let i = 0; i <= rowIndex; i ++) {
        res.push(1)
        for(let j = i - 1; j > 0; j --) {
            res[j] = res[j] + res[j - 1]
        }
    }
    return res
}

/*
累加的时候从前往后加回改变待加的位置，从后往前加不会
*/