/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode-cn.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (71.93%)
 * Total Accepted:    8.1K
 * Total Submissions: 11.3K
 * Testcase Example:  '3'
 *
 * 给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 8, 9, 4 ],
 * ⁠[ 7, 6, 5 ]
 * ]
 * 
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let [x1, x2, y1, y2] = [0, n - 1, 0, n - 1]
    let res = []
    for(let i  = 0; i < n; i ++) {
        res[i] = []
    }
    let target = 1
    while(x1 <= x2 && y1 <= y2) {
        for(let i = y1; i <= y2; i ++) {
            res[x1][i] = target ++
        }
        for(let i = x1 + 1; i <= x2; i ++) {
            res[i][y2] = target ++
        }
        if(x2 > x1 && y2 > y1) {
            for(let i = y2 - 1; i >= y1; i --) {
                res[x2][i] = target ++
            }
            for(let i = x2 - 1; i > x1; i --) {
                res[i][y1] = target ++
            }
        }
        x1 ++
        x2 --
        y1 ++
        y2 -- 
    }
    return res 
};

