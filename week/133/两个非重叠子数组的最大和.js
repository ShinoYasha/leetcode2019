// https://leetcode-cn.com/contest/weekly-contest-133/problems/maximum-sum-of-two-non-overlapping-subarrays/
var maxSumTwoNoOverlap = function(A, L, M) {
    let pre = [0]
    for(let i = 0; i < A.length; i ++) {
        pre.push(pre[i] + A[i])
    }
    // x为L的索引，y为M的索引，判断x，y是否为正确索引
    function valid(x, y) {
        return x + L <= A.length && y + M <= A.length && (x+L<= y || y + M <= x)
    }
    let res = 0
    for(let i = 0; i < A.length; i ++) {
        for(let j = 0; j < A.length; j ++) {
            if(valid(i, j)) {
                res = Math.max(res, pre[i+L]-pre[i]+pre[j+M]-pre[j])
            }
        }
    }
    return res
};