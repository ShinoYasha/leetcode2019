/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let temp = []
    for(let i = 0; i < nums.length; i ++) {
        let index = binarySearch(temp, nums[i])
        console.log(temp)
        if(index === temp.length) {
            temp.push(nums[i])
        } else {
            temp[index] = nums[i]
        }
    }
    return temp.length
    function binarySearch(arr, num) {
        let left = 0
        let right = arr.length 
        while(left < right) {
            let mid = Math.floor((left + right) / 2)
            if(arr[mid] < num) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        return right
    }
};

// 思路特别 需要多消化