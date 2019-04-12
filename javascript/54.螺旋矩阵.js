/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (34.70%)
 * Total Accepted:    11.7K
 * Total Submissions: 33.6K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 * 
 * 示例 1:
 * 
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = []
    if(matrix.length === 0) {
        return res
    }
    let x = matrix.length // 3
    let y = matrix[0].length  // 4
    let [x1, y1, x2, y2] = [0, 0, x - 1, y - 1]
    while(x1 <= x2 && y1 <= y2) {
        for(let i = y1; i <= y2; i ++) {
            res.push(matrix[x1][i])
        }
        for(let i = x1 + 1; i <= x2; i ++) {
            res.push(matrix[i][y2])
        }
        if(x2 > x1 && y2 > y1) {
            for(let i = y2 - 1; i >=y1; i --) {
                res.push(matrix[x2][i])
            }
            for(let i = x2 - 1; i > x1; i --) {
                res.push(matrix[i][y1])
            }
        }   
        x1 ++
        x2 --
        y1 ++
        y2 --
    }
    return res
};

