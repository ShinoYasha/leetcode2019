/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  if(right === 0) {return nums[0]}
  while (left < right) {
    if (nums[left] < nums[right]) return nums[left];
    else {
      let mid = Math.ceil((left + right) / 2);
      if (nums[mid] > nums[left]) {
        left = mid + 1;
      } else if (nums[mid] < nums[left]) {
        if (nums[mid] < nums[mid - 1]) {
          return nums[mid];
        } else {
          right = mid - 1;
        }
      }
    }
  }
  return nums[left]
};
