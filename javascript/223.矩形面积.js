/*
 * @lc app=leetcode.cn id=223 lang=javascript
 *
 * [223] 矩形面积
 */
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    let left = Math.max(A, E)
    let right = Math.min(C, G)
    let top = Math.min(D, H)
    let bottom = Math.max(B, F)
    let doubleArea = 0
    if(left < right && bottom < top) {
        doubleArea = (right - left) * (top - bottom)
    }
    return (C - A) * (D - B) + (G - E) * (H - F) - doubleArea
};

