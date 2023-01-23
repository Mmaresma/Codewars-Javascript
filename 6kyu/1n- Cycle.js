//JavaScript: 6 kyu - 1/n- Cycle
//https://www.codewars.com/kata/5a057ec846d843c81a0000ad

function cycle(n) {
  if (n % 10 === 0 || n % 2 === 0 || n % 5 === 0) {
    return -1;
  }

  let res = 10 % n;
  let count = 1;
  while (res !== 1) {
    res = res * 10 % n;
    count++;
  }
  return count;
}
