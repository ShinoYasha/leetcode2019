/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 *
 * https://leetcode-cn.com/problems/word-search/description/
 *
 * algorithms
 * Medium (36.64%)
 * Total Accepted:    8.9K
 * Total Submissions: 24.3K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
 * 
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * 
 * 示例:
 * 
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 * 
 * 给定 word = "ABCCED", 返回 true.
 * 给定 word = "SEE", 返回 true.
 * 给定 word = "ABCB", 返回 false.
 * 
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // console.log(board[0][2])
    function getWords(board, i, j, word, index) {
        let row = board.length
        let col = board[0].length
        if(index === word.length) {
            return true
        }
        if(i > 0) {
            if(board[i-1][j] === word[index]) {
                board[i-1][j] = '?'
                if(getWords(board, i-1, j, word, index + 1)) {
                    return true
                }
                board[i-1][j] = word[index]
            }
        }
        if(i < row - 1) {
            if(board[i+1][j] === word[index]) {
                board[i+1][j] = '?'
                if(getWords(board, i+1, j, word, index+1)) {
                    return true
                }
                board[i+1][j] = word[index]
            }
        }
        if(j > 0) {
            if(board[i][j-1] === word[index]) {
                board[i][j-1] = '?'
                if(getWords(board, i, j-1, word, index+1)) {
                    return true
                }
                board[i][j-1] = word[index]
            }
        }
        if(j < col - 1) {
            if(board[i][j+1] === word[index]) {
                board[i][j+1] = '?'
                if(getWords(board, i, j+1, word, index+1)) {
                    return true
                }
                board[i][j+1] = word[index]
            }
        }
        return false
    }
    for(let i = 0; i < board.length; i ++) {
        for(let j = 0; j < board[0].length; j ++) {
            // console.log(board)
            // console.log(`${i} ${j} ${board[i][j]}`)
            if(board[i][j] === word[0]) {
                // console.log(`${i} ${j}`)
                board[i][j] = '?'
                if(getWords(board, i, j, word, 1)) {
                    return true
                }
                board[i][j] = word[0]
            }
        }
    }
    return false
};

// console.log(exist([["C","A","A"],["A","A","A"],["B","C","D"]], 'AAB'))
