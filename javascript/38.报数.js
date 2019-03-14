/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 *
 * https://leetcode-cn.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (48.21%)
 * Total Accepted:    22.1K
 * Total Submissions: 45.8K
 * Testcase Example:  '1'
 *
 * 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 被读作  "one 1"  ("一个一") , 即 11。
 * 11 被读作 "two 1s" ("两个一"）, 即 21。
 * 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
 * 
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 * 
 * 注意：整数顺序将表示为一个字符串。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "1"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 4
 * 输出: "1211"
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1) {
        return '1'
    }
    let s = '1'
    while(n > 1 ) {
        s = count(s)
        n -= 1
    }
    return s
};

function count(s) {
    let res = []
    let count = 1
    console.log(s)
    let temp = s[0]
    for(let i = 1; i < s.length; i ++) {
        if(s[i] === temp) {
            count += 1
        } else {
            res.push(count)
            res.push(temp)
            temp = s[i]
            count = 1
        }
    }
    res.push(count)
    res.push(temp)
    return res.join('') 
}
// console.log(count('112'))
/*
  注意最后一个字符的处理。必须再加  
*/