/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.61%)
 * Total Accepted:    49.7K
 * Total Submissions: 135.8K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {'{':'}', '(':')','[':']'}
    let stack = []
    for(let i = 0; i < s.length; i ++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i])
        } else {
            let out = stack.pop()
            if(map[out] !== s[i]) {
                return false
            } 
        }
    }
    if(stack.length != 0 ) {
        return false
    } else {
        return true
    }     
};


/*
用栈，遇到正括号进栈，反之出栈。
如果出栈时对应的括号与传进来的括号不匹配，则false
*/
