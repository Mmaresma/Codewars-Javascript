//JavaScript: 4 kyu - Snail
//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

function snail(array) {

  if (array.length === 0) {
    return [];
  }

  const result = [];

  let row = 0;
  let col = 0;
  let dir = 0; 

  const n = array.length;
  const m = array[0].length;

  const visited = new Array(n);
  for (let i = 0; i < n; i++) {
    visited[i] = new Array(m).fill(false);
  }


  for (let i = 0; i < n * m; i++) {
    result.push(array[row][col]);

    visited[row][col] = true;

    if (dir === 0) { 
      if (col + 1 >= m || visited[row][col + 1]) {
        dir = 1;
        row++;
      } else {
        col++;
      }
    } else if (dir === 1) {
      if (row + 1 >= n || visited[row + 1][col]) {
        dir = 2; 
        col--;
      } else {
        row++;
      }
    } else if (dir === 2) { 
      if (col - 1 < 0 || visited[row][col - 1]) {
        dir = 3; 
        row--;
      } else {
        col--;
      }
    } else if (dir === 3) { 
      if (row - 1 < 0 || visited[row - 1][col]) {
        dir = 0; 
        col++;
      } else {
        row--;
      }
    }
  }

  return result;
}
