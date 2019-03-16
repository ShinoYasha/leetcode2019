#
# @lc app=leetcode.cn id=67 lang=python3
#
# [67] 二进制求和
#
# https://leetcode-cn.com/problems/add-binary/description/
#
# algorithms
# Easy (46.87%)
# Total Accepted:    18.3K
# Total Submissions: 39.1K
# Testcase Example:  '"11"\n"1"'
#
# 给定两个二进制字符串，返回他们的和（用二进制表示）。
# 
# 输入为非空字符串且只包含数字 1 和 0。
# 
# 示例 1:
# 
# 输入: a = "11", b = "1"
# 输出: "100"
# 
# 示例 2:
# 
# 输入: a = "1010", b = "1011"
# 输出: "10101"
# 
#
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        a1 = int(a, 2)
        b1 = int(b, 2)
        c = a1 + b1
        c1 = bin(c)[2:]
        return c1
# 这就体现python的优势了
