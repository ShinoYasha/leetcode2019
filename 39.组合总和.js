/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 *
 * https://leetcode-cn.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (62.48%)
 * Total Accepted:    12.5K
 * Total Submissions: 19.9K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的数字可以无限制重复被选取。
 * 
 * 说明：
 * 
 * 
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: candidates = [2,3,6,7], target = 7,
 * 所求解集为:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 输入: candidates = [2,3,5], target = 8,
 * 所求解集为:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = []
    candidates.sort((a, b) => {
        return a - b
    })
    combination(candidates, target, 0, res, [])
    return res

    function combination(candidates, target, index, res, current) {
        // if(target < candidates[0]) {
        //     return
        // }
        if(target === 0) {
            res.push(current)
            return 
        }
        if(target < candidates[0]) {
            return
        }
        for(let i = index; i < candidates.length; i ++) {
            // current.push(candidates[i])
            combination(candidates, target - candidates[i], i, res, current.concat(candidates[i]))
        }
    }
};

