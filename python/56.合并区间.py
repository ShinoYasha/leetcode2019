#
# @lc app=leetcode.cn id=56 lang=python3
#
# [56] 合并区间
#
# https://leetcode-cn.com/problems/merge-intervals/description/
#
# algorithms
# Medium (34.90%)
# Total Accepted:    10.5K
# Total Submissions: 30K
# Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
#
# 给出一个区间的集合，请合并所有重叠的区间。
# 
# 示例 1:
# 
# 输入: [[1,3],[2,6],[8,10],[15,18]]
# 输出: [[1,6],[8,10],[15,18]]
# 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
# 
# 
# 示例 2:
# 
# 输入: [[1,4],[4,5]]
# 输出: [[1,5]]
# 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
# 
#
# Definition for an interval.
# class Interval:
#     def __init__(self, s=0, e=0):
#         self.start = s
#         self.end = e

class Solution:
    def merge(self, intervals: List[Interval]) -> List[Interval]:
        lenint = len(intervals)
        if lenint < 2:
            return intervals
        intervals = sorted(intervals, key = lambda startone: startone.start)
        res = []
        for i in range(1, lenint, 1):
            last = intervals[i - 1]
            current = intervals[i]
            if last.end < current.start:
                res.append(intervals[i-1])
            else:
                current.start = last.start
                current.end = max(intervals[i].end, intervals[i-1].end)
        res.append(intervals[i])
        return res


