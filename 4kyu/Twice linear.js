//JavaScript: 4 kyu - Twice linear
//https://www.codewars.com/kata/5672682212c8ecf83e000050

function dblLinear(u) {
  let A = 1;
  let B = [];
  let C = [];

  for (let contador = 0; contador < u; contador++) {
    B.push(2 * A + 1);
    C.push(3 * A + 1);
    let min = Math.min(B[0], C[0]);
    if (min === B[0]) A = B.shift();
    if (min === C[0]) A = C.shift();
  }
  return A;
}
