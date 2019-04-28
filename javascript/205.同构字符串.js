/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 *
 * https://leetcode-cn.com/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (43.47%)
 * Total Accepted:    9.8K
 * Total Submissions: 22.4K
 * Testcase Example:  '"egg"\n"add"'
 *
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
 * 
 * 如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。
 * 
 * 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 * 
 * 示例 1:
 * 
 * 输入: s = "egg", t = "add"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "foo", t = "bar"
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: s = "paper", t = "title"
 * 输出: true
 * 
 * 说明:
 * 你可以假设 s 和 t 具有相同的长度。
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let l = s.length
    let mapS = []
    let mapT = []
    for(let i = 0; i < l; i ++) {
        let index = mapS.indexOf(s[i])
        if(index != -1) {
            if(t[i] != mapT[index]) {
                return false
            }
        } else {
            if(mapT.includes(t[i])) {
                return false 
            } else {
                mapS.push(s[i])
                mapT.push(t[i])
            }
        }
        // console.log(mapS)
        // console.log(mapT)
    }
    return true
};

