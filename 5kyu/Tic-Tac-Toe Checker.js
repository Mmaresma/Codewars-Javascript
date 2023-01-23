//JavaScript: 5 kyu - Tic-Tac-Toe Checker
//https://www.codewars.com/kata/525caa5c1bf619d28c000335

function isSolved(board) {
    var winningPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    var flatBoard = board.reduce(function (a, b) { return a.concat(b); });

    var won = winningPatterns.filter(function (pattern) {
        return (flatBoard[pattern[0]] !== 0) && ((flatBoard[pattern[0]] === flatBoard[pattern[1]]) && (flatBoard[pattern[1]] === flatBoard[pattern[2]]));
    });

    if (won.length) {
        return flatBoard[won[0][0]];
    }

    if (flatBoard.some(function (pos) { return pos === 0; })) { return -1; }
    return 0;
}

console.log(isSolved([[1, 1, 1], [1, 1, 2], [2, 1, 1]]));
