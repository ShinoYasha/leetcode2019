/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (36.20%)
 * Total Accepted:    22.8K
 * Total Submissions: 62.8K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 案例:
 * 
 * 
 * s = "leetcode"
 * 返回 0.
 * 
 * s = "loveleetcode",
 * 返回 2.
 * 
 * 
 * 
 * 
 * 注意事项：您可以假定该字符串只包含小写字母。
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if(s === "") {
        return -1
    }
    let hashMap = {}
    for(let i in s) {
        if(Object.keys(hashMap).includes(s[i])) {
            hashMap[s[i]] += 1
        } else {
            hashMap[s[i]] = 1
        }
    }  
    //console.log(hashMap)
    for(let i in hashMap) {
        if(hashMap[i] === 1) {

            return s.indexOf(i)
        }
    }
    return -1
};
/*
总感觉有点蠢，应该有更好的方法。。以后再来
*/