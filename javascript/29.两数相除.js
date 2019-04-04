/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 *
 * https://leetcode-cn.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (17.60%)
 * Total Accepted:    10.3K
 * Total Submissions: 57.9K
 * Testcase Example:  '10\n3'
 *
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 
 * 示例 1:
 * 
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 * 
 * 说明:
 * 
 * 
 * 被除数和除数均为 32 位有符号整数。
 * 除数不为 0。
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31,  2^31 − 1]。本题中，如果除法结果溢出，则返回 2^31 − 1。
 * 
 * 
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let sign = 1, mul = 1, result = 0
    if((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
        sign = -1
    }
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    divisor2 = divisor
    while(dividend >= divisor2) {
        if(dividend > 2 * divisor2) {
            divisor2 = 2 * divisor2
            mul = 2 * mul
        }
        dividend -= divisor2
        result += mul
    }
    while(dividend >= divisor) {
        dividend -= divisor
        result += 1
    }
    result = result * sign
    if(result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1
    } 
    return result
};

/*
    一开始没有用2倍来判断。。时间超时
*/