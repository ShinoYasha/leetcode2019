/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    // [3,1,3,3,3] or [3,3,3,1,3]
    if (nums[left] <= nums[right]) {
      right -= 1;
    } else {
      let mid = Math.floor((left + right) / 2);
      if(nums[left] <= nums[mid]) {
        left = mid + 1;
      } else {
        right = mid
      }
    }
  }
  return nums[left]
};
