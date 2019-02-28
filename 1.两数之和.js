/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (44.67%)
 * Total Accepted:    251.2K
 * Total Submissions: 562.4K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let hashMap = {}
    for(let i = 0; i < nums.length; i ++) {
        let a = target - nums[i]
        if(hashMap[a] === undefined) {
            hashMap[nums[i]] = i
        } else {
        return [hashMap[a], i]
        }
   }
};
/*
思路：
    （暴力循环不谈了）
    新建一个存储值与索引的对象hashMap
    从头遍历参数数组
        1.如果target-current的值不在hashMap的key中，则还未找到目标，将[current：current的索引]作为键值存到hashMap中。
        2.如果target-current的值在hashMap的key中，则找到目标，返回当前[当前的索引, hashMap[target-current]]
*/

