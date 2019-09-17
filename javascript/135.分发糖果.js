/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  let len = ratings.length;
  let resArr = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      resArr[i] = resArr[i - 1] + 1;
    }
  }
  for (let i = len - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i] && resArr[i - 1] <= resArr[i]) {
      resArr[i - 1] = resArr[i] + 1;
    }
  }
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += resArr[i];
  }
  console.log(resArr);
  return sum;
};
