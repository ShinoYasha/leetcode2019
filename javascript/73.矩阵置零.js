/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 *
 * https://leetcode-cn.com/problems/set-matrix-zeroes/description/
 *
 * algorithms
 * Medium (52.46%)
 * Total Accepted:    10.6K
 * Total Submissions: 20.3K
 * Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
 *
 * 给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。
 * 
 * 示例 1:
 * 
 * 输入: 
 * [
 * [1,1,1],
 * [1,0,1],
 * [1,1,1]
 * ]
 * 输出: 
 * [
 * [1,0,1],
 * [0,0,0],
 * [1,0,1]
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 输入: 
 * [
 * [0,1,2,0],
 * [3,4,5,2],
 * [1,3,1,5]
 * ]
 * 输出: 
 * [
 * [0,0,0,0],
 * [0,4,5,0],
 * [0,3,1,0]
 * ]
 * 
 * 进阶:
 * 
 * 
 * 一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
 * 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
 * 你能想出一个常数空间的解决方案吗？
 * 
 * 
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let recordRow = null, recordCol = null
    let row = matrix.length
    let col = matrix[0].length
    for(let i = 0; i < row; i ++) {
        for(let j = 0; j < col; j ++) {
            if(matrix[i][j] === 0) {
                recordRow = i
                recordCol = j
                break
            }
        }
    }
    if(recordCol === null) {
        return matrix
    }
    for(let i = 0; i < row; i ++) {
        for(let j = 0; j < col; j ++) {
            if(matrix[i][j] === 0) {
                matrix[i][recordCol] = 0
                matrix[recordRow][j] = 0
            }
        }
    }
//   ?  console.log(matrix)

    for(let i = 0; i< row; i ++) {
        for(let j = 0; j < col; j ++) {
            if((i !== recordRow && j !== recordCol) && (matrix[i][recordCol] === 0 || matrix[recordRow][j] === 0)) {
                matrix[i][j] = 0
            } 
        }
    }
    for(let i = 0; i < row; i ++) {
        matrix[i][recordCol] = 0
    }
    for(let j = 0; j < col; j ++) {
        matrix[recordRow][j] = 0
    }
};
