/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let dp = [];
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for(let j = 0; j < i; j ++) {
      let substr = s.slice(j, i)
      if(wordDict.includes(substr) && dp[j]) {
        dp[i] = true
        break
      }
      dp[i] = false
    }
   
  }
  return dp[s.length]
};
