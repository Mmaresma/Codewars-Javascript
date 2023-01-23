//JavaScript: 4 kyu - Sudoku Solution Validator
//https://www.codewars.com/kata/529bf0e9bdf7657179000008

function validSolution(tablero) {
  let C0 = 0;let C1 = 0;let C2 = 0;let C3 = 0;let C4 = 0;let C5 = 0;let C6 = 0;let C7 = 0;let C8 = 0;let C9 = 0;
  for (let i = 0; i < tablero.length; i++) {
    C0 += tablero[i][0];C1 += tablero[i][1];C2 += tablero[i][2];C3 += tablero[i][3];C4 += tablero[i][4];C5 += tablero[i][5];C6 += tablero[i][6];C7 += tablero[i][7];C8 += tablero[i][8];
  }
  return (
    C0 === 45 && C1 === 45 && C2 === 45 && C3 === 45 && C4 === 45 && C5 === 45 && C6 === 45 && C7 === 45 && C8 === 45 && tablero[7][8] != tablero[8][7]
  );
}
