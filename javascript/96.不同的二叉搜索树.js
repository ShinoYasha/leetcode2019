/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let res = []
    for(let i = 0 ; i < n + 1; i ++) {
        res.push(0)
    }
    res[0] = 1
    res[1] = 1
    for(let i = 2; i < n + 1; i ++) {
        for(let j = 1; j < i + 1; j ++) {
            res[i] += res[j-1] * res[i-j]
        }
    }
    console.log(res)
    return res[n]
};

