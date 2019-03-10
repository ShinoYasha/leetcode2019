/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (68.77%)
 * Total Accepted:    15.4K
 * Total Submissions: 22.4K
 * Testcase Example:  '3'
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 
 * 例如，给出 n = 3，生成结果为：
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
   let res = []
   generate(n, n, "", res) 
   return res
};
var generate = function(left, right, out, res) {
    if(left > right) {
        return
    }
    if(left === 0 && right === 0) {
        res.push(out)
    } else {
        if(left > 0) {
            generate(left-1, right, `${out}(`, res)
        }
        if(right > 0) {
            generate(left, right-1, `${out})`, res)
        }
    }

}

/* 
    试下命令
*/
