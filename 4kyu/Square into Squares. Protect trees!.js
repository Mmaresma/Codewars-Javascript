//JavaScript: 4 kyu - Square into Squares. Protect trees!
//https://www.codewars.com/kata/54eb33e5bc1a25440d000891

function decompose(n1, n2 = n1 * n1, x = n1, anterior) {
  while (n2 > 0 && x-- > 1)
    if ((anterior = decompose(n1, n2 - x * x, x))) return anterior.concat([x]);
  return n2 == 0 ? [] : null;
}
