/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftMax = [height[0]]
    let rightMax = []
    let realValue = []
    let res = 0
    rightMax[height.length - 1] = height[height.length - 1]
    for(let i = 1; i < height.length; i ++) {
        leftMax[i] = Math.max(leftMax[i-1], height[i])
        rightMax[height.length-1-i] = Math.max(rightMax[height.length-i], height[height.length-1-i])
    }
    // console.log(leftMax)
    // console.log(rightMax)
    for(let i = 0; i < height.length; i ++) {
        realValue[i] = Math.min(leftMax[i], rightMax[i])
        if(realValue[i] > height[i]) {
            res += (realValue[i] - height[i])
        }
    }
    // console.log(realValue)
    return res
};

