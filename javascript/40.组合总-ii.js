/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 *
 * https://leetcode-cn.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (54.43%)
 * Total Accepted:    10.5K
 * Total Submissions: 19.3K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的每个数字在每个组合中只能使用一次。
 * 
 * 说明：
 * 
 * 
 * 所有数字（包括目标数）都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 所求解集为:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 所求解集为:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = []
    candidates.sort((a, b) => {
        return  a - b
    })
    combination(candidates, target, 0, res, [])
    return res

    function combination(candidates, target, index, res, current) {
        if(target === 0) {
            res.push(current)
            return res
        }
        if(target < 0) {
            return
        }
        for(let i = index; i < candidates.length; i ++) {
            if(i != index && candidates[i] == candidates[i - 1]) {
                continue
            }
            combination(candidates, target - candidates[i], i+1 ,res, current.concat(candidates[i]))         
        }
    }
};
/*
    需要判断不与第一个重复！！
*/
