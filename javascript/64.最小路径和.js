/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (59.58%)
 * Total Accepted:    13.6K
 * Total Submissions: 22.7K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length
    let n = grid[0].length
    let dp = []
    for(let i = 0; i < m; i++) {
        dp.push([])
        for(let j = 0; j < n; j ++) {
            if(i == 0 && j == 0) {
                dp[i][j] = grid[i][j]
            } else if(i == 0 && j != 0) {
                dp[i][j] = dp[i][j-1] + grid[i][j]
            } else if(i != 0 && j == 0) {
                dp[i][j] = dp[i-1][j] + grid[i][j]
            } else {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
            }
        }
    }
    return dp[m-1][n-1]
};

