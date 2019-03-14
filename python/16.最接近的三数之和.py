#
# @lc app=leetcode.cn id=16 lang=python3
#
# [16] 最接近的三数之和
#
# https://leetcode-cn.com/problems/3sum-closest/description/
#
# algorithms
# Medium (39.05%)
# Total Accepted:    18.1K
# Total Submissions: 46.3K
# Testcase Example:  '[-1,2,1,-4]\n1'
#
# 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
# 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
# 
# 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
# 
# 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
# 
# 
#
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        res = nums[0] + nums[1] + nums[2]
        current = abs(nums[0] + nums[1] + nums[2] - target)
        nums = sorted(nums)
        lenOfNums = len(nums)
        for i in range(lenOfNums):
            secondIndex = i + 1
            lastIndex = lenOfNums - 1
            while secondIndex < lastIndex:
                temp = abs(nums[i] + nums[secondIndex] + nums[lastIndex] - target)
                if temp < current:
                    current = temp
                    res = nums[i] + nums[secondIndex] + nums[lastIndex]
                if nums[i] + nums[secondIndex] + nums[lastIndex] > target:
                    lastIndex -= 1
                elif nums[i] + nums[secondIndex] + nums[lastIndex] < target:
                    secondIndex += 1
                else:
                    res = nums[i] + nums[secondIndex] + nums[lastIndex]
                    return res
        return res

# 最后的else中及时return出来
        

