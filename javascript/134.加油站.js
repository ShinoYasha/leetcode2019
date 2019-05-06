/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let cur = 0
    let index = 0
    let sumGas = 0
    let sumCost = 0
    for(let i = 0; i < gas.length; i ++) {
        sumGas += gas[i]
        sumCost += cost[i]
        cur += (gas[i] - cost[i])
        if(cur < 0) {
            cur = 0
            index = i + 1
        }
    }
    return sumGas >= sumCost ? index : -1
};

