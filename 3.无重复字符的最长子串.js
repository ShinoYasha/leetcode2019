/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (28.17%)
 * Total Accepted:    82.6K
 * Total Submissions: 292K
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1:
 * 
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hashMap = {}
    let start = 0
    let end = 0
    let res = end - start
    for(let i = 0; i < s.length; i ++) {
        if(hashMap[s[i]] !== undefined && start <= hashMap[s[i]] ) {
            start = hashMap[s[i]] + 1
        } else {
            res = Math.max(i-start + 1, res)
        }
        hashMap[s[i]] = i
    }
    return res
};
console.log(lengthOfLongestSubstring('pwwkew'))
/*
    hashMap保存字符与字符所在位置的对象数组
    遍历s，如果当前字符已经存在于hashMap中，则更新字符位置。

    其实脑子里的大概思路很早就想好了，但把代码写到oc花了好久。。
    坑了自己很久的地方. 必须在当前的start < hashMap[s[i]]时才会更新start，否则start会回退

*/