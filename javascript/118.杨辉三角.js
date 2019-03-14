/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (60.19%)
 * Total Accepted:    17.6K
 * Total Submissions: 29.1K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 *
 *
 *
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 *
 * 示例:
 *
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 *
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = []
    for (let i = 0; i < numRows; i++) {
        let currentRow = []
        currentRow[0] = 1
        currentRow[i] = 1
        let center = 1
        while (center > 0 && center < i) {
            currentRow[center] = res[i - 1][center - 1] + res[i - 1][center]
            center = center + 1
        }
        res.push(currentRow)
    }
    return res
}
