/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (24.75%)
 * Total Accepted:    46.3K
 * Total Submissions: 186.4K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length
    let res = []
    for(let i = 0; i < len; i ++) {
        res.push([])
    }
    let start = 0
    let end = 0
    for(let i = 0; i < len; i ++) {
        for(let j = 0; j < len - i; j ++) {
            if(i === 0) {
                res[j][j] = true
            } else if(i === 1) {
                if(s[j] === s[j + 1]) {
                    res[j][j+1] = true
                }
            } else {
                if(s[j] === s[j + i] && res[j + 1][j + i - 1]) {
                    res[j][j+i] = true
                }
            }
            if(res[j][j+i]) {
                // console.log(j)
                // console.log(j+i)
                // console.log(start)
                // console.log(end)
                if(end - start < i) {
                start = j
                end = i + j
                }
            }
        }
    }
    return s.substring(start, end+1)
};

