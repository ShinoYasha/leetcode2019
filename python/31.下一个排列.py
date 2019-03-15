#
# @lc app=leetcode.cn id=31 lang=python3
#
# [31] 下一个排列
#
# https://leetcode-cn.com/problems/next-permutation/description/
#
# algorithms
# Medium (30.03%)
# Total Accepted:    9.2K
# Total Submissions: 30.6K
# Testcase Example:  '[1,2,3]'
#
# 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
# 
# 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
# 
# 必须原地修改，只允许使用额外常数空间。
# 
# 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
# 1,2,3 → 1,3,2
# 3,2,1 → 1,2,3
# 1,1,5 → 1,5,1
# 
#
class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        pos = 0
        for i in range(len(nums) - 2, -1, -1):
            if nums[i] < nums[i + 1]:
                pos = i + 1
                break
        left = pos
        right = len(nums) - 1
        while left < right:
            nums[left], nums[right] = nums[right],  nums[left]
            left += 1
            right -= 1
        print(nums)
        print(pos)
        for i in range(pos, len(nums)):
            if nums[i] > nums[pos - 1]:
                nums[pos - 1], nums[i] = nums[i], nums[pos - 1]
                break
        
        

# 边界条件好麻烦······ 
# 思路：
# a = [1,5,4,1,3,5,6,1]
# 从后往前遍历，碰到的第一个变小的位数为需要交换的位置，例子中为5，
# 将交换位置之后的数组进行升序排序[...,1，6]
# 从[1，6]中找到第一个大于5的数字，与其交换[6, 1, 5]

