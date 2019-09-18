/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let x = word1.length;
  let y = word2.length;
  let resArr = [];
  if (x === 0 || y === 0) {
    return Math.max(x, y);
  }
  for (let i = 0; i <= x; i++) {
    resArr.push([]);
  }
  for (let i = 0; i <= x; i++) {
    resArr[i][0] = i;
  }
  for (let j = 0; j <= y; j++) {
    resArr[0][j] = j;
  }
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= y; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        resArr[i][j] = resArr[i - 1][j - 1];
      } else {
        resArr[i][j] =
          Math.min(resArr[i - 1][j - 1], resArr[i - 1][j], resArr[i][j - 1]) +
          1;
      }
    }
  }
  return resArr[x][y];
};

```
开始构造数组的时候用的new Array(x).fill(new Array(y))。所有数组都是同一个数组的引用。。坑
```