/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.60%)
 * Total Accepted:    83.8K
 * Total Submissions: 265.2K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // if(x > Math.pow(2, 23) - 1 || x < -Math.pow(2, 23)) return 0
    let convertString = x.toString()
    let resArray = convertString.split('')
    if (resArray[0] === '-') {
        resArray.push(resArray.shift())
    }
    let res = parseInt(resArray.reverse().join(''))
    if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) {
        return 0
    } else {
        return res 
    }
}
// 没啥好说的，之前join('')写成了join()