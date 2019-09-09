/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let x = matrix.length;
  if (x == 0) {
    return [];
  }
  let y = matrix[0].length;
  let resMatrix = [];
  for (let i = 0; i < x; i++) {
    resMatrix.push([]);
  }
  let result = 0;
  for (let i = 0; i < x; i++) {
    resMatrix[i][0] = matrix[i][0];
    result = Math.max(result, matrix[i][0]);
  }
  for (let j = 0; j < y; j++) {
    resMatrix[0][j] = matrix[0][j];
    result = Math.max(result, matrix[0][j]);
  }
  for (let k = 1; k < x; k++) {
    for (let l = 1; l < y; l++) {
      if (matrix[k][l] == 0) {
        resMatrix[k][l] = 0;
      } else {
        resMatrix[k][l] =
          Math.min(
            resMatrix[k][l - 1],
            resMatrix[k - 1][l],
            resMatrix[k - 1][l - 1]
          ) + 1;
      }
      result = Math.max(result, resMatrix[k][l]);
    }
  }
  return Math.pow(result, 2);
};
