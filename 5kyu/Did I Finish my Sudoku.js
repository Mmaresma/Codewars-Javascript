//JavaScript: 5 kyu - Did I Finish my Sudoku?
//https://www.codewars.com/kata/53db96041f1a7d32dc0004d2

function doneOrNot(board) {
    // Verificar si cada fila es válida
    for (let i = 0; i < 9; i++) {
      let row = new Set();
      for (let j = 0; j < 9; j++) {
        if (row.has(board[i][j])) {
          return 'Try again!';
        } else {
          row.add(board[i][j]);
        }
      }
    }
  
    // Verificar si cada columna es válida
    for (let i = 0; i < 9; i++) {
      let col = new Set();
      for (let j = 0; j < 9; j++) {
        if (col.has(board[j][i])) {
          return 'Try again!';
        } else {
          col.add(board[j][i]);
        }
      }
    }
  
    // Verificar si cada región es válida
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        let region = new Set();
        for (let k = i; k < i + 3; k++) {
          for (let l = j; l < j + 3; l++) {
            if (region.has(board[k][l])) {
              return 'Try again!';
            } else {
              region.add(board[k][l]);
            }
          }
        }
      }
    }
  
    return 'Finished!';
  }