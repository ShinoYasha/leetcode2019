/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H指数
 */
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a, b) => a - b);
  let len = citations.length
  let c, times, res
  res = 0
  for(let i = 0; i < len; i ++) {
    c = citations[i]
    times = len - i
    if(times <= c) {
      if(times > res) {
        res = times
      }
    }
  }
  return res
};
