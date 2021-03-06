/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (34.16%)
 * Total Accepted:    8.4K
 * Total Submissions: 24.7K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,50]]\n3'
 *
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 
 * 
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 3
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 13
 * 输出: false
 * 
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = matrix.length
    if(row == 0) return false
    let col = matrix[0].length
    if(col == 0) {
        return false
    }
    console.log('1')
    let curRow = 0
    if(matrix[row-1][col-1] < target) {return false}
    for(curRow= 0; curRow < row; curRow ++) {
        if(matrix[curRow][col-1] >= target) {
            break
        }
        // return false
    }
    console.log('1')
    let left = 0
    let right = col - 1
    while(left <= right) {
        let mid = Math.floor((left+right) / 2)
        if(matrix[curRow][mid] === target) {
            return true
        } else if(matrix[curRow][mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return false

};

