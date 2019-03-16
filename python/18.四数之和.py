#
# @lc app=leetcode.cn id=18 lang=python3
#
# [18] 四数之和
#
# https://leetcode-cn.com/problems/4sum/description/
#
# algorithms
# Medium (34.40%)
# Total Accepted:    13.3K
# Total Submissions: 38.8K
# Testcase Example:  '[1,0,-1,0,-2,2]\n0'
#
# 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
# + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
# 
# 注意：
# 
# 答案中不可以包含重复的四元组。
# 
# 示例：
# 
# 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
# 
# 满足要求的四元组集合为：
# [
# ⁠ [-1,  0, 0, 1],
# ⁠ [-2, -1, 1, 2],
# ⁠ [-2,  0, 0, 2]
# ]
# 
# 
#
class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        res = []
        lenOfNums = len(nums)
        for i in range(lenOfNums):
            if i != 0 and nums[i] == nums[i-1]:
                continue
            for j in range(i+1, lenOfNums):
                if j != i + 1 and nums[j] == nums[j-1]:
                    continue
                current = nums[i] + nums[j]
                # if current > target:
                #     continue
                thirdIndex = j + 1
                lastIndex = lenOfNums - 1
                while thirdIndex < lastIndex:
                    if current + nums[thirdIndex] + nums[lastIndex] == target:
                        res.append([nums[i], nums[j], nums[thirdIndex], nums[lastIndex]])
                        thirdIndex = thirdIndex + 1
                        lastIndex = lastIndex - 1
                        while thirdIndex < lastIndex and nums[thirdIndex] == nums[thirdIndex - 1]:
                            thirdIndex += 1
                        while thirdIndex < lastIndex and nums[lastIndex] == nums[lastIndex + 1]:
                            lastIndex -= 1
                    elif current + nums[thirdIndex] + nums[lastIndex] > target:
                        lastIndex -= 1
                    else:
                        thirdIndex += 1
        return res

                    
        

# 注意边界条件。今晚略晚，明早优化