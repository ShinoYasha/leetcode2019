/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let height = triangle.length;
  for (let i = height - 2; i >= 0; i--) {
    let width = triangle[i].length;
    for (let j = 0; j < width; j++) {
      triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1]) 
    }
  }
  return triangle[0][0]
};
