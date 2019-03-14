#
# @lc app=leetcode.cn id=15 lang=python3
#
# [15] 三数之和
#
# https://leetcode-cn.com/problems/3sum/description/
#
# algorithms
# Medium (21.13%)
# Total Accepted:    40K
# Total Submissions: 187.3K
# Testcase Example:  '[-1,0,1,2,-1,-4]'
#
# 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
# ？找出所有满足条件且不重复的三元组。
# 
# 注意：答案中不可以包含重复的三元组。
# 
# 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
# 
# 满足要求的三元组集合为：
# [
# ⁠ [-1, 0, 1],
# ⁠ [-1, -1, 2]
# ]
# 
# 
#
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums = sorted(nums)
        lenOfNums = len(nums)
        res = []
        for i in range(lenOfNums):
            secondIndex = i + 1
            lastIndex = lenOfNums - 1
            if i != 0 and nums[i] == nums[i-1]:
                continue
            while secondIndex < lastIndex:
             #// print(nums[i]+nums[secondIndex]+nums[lastIndex])
                if nums[i] + nums[secondIndex] + nums[lastIndex] == 0:
                    res.append([nums[i], nums[secondIndex], nums[lastIndex]])
                    secondIndex += 1
                    lastIndex -= 1
                    while secondIndex < lastIndex and nums[secondIndex] == nums[secondIndex - 1]:
                        secondIndex += 1
                    while secondIndex < lastIndex and nums[lastIndex] == nums[lastIndex + 1]:
                        lastIndex -= 1
                elif nums[i] + nums[secondIndex] + nums[lastIndex] > 0:
                    lastIndex -= 1
                else:
                    secondIndex += 1
        return res

## sorted不改变原数组！！！

