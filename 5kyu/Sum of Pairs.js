//JavaScript: 5 kyu - Sum of Pairs
//https://www.codewars.com/kata/54d81488b981293527000c8f

function sumPairs(ints, s) {
  let seen = new Set();
  
  for (let i = 0; i < ints.length; i++) {
    if (seen.has(s - ints[i])) {
      return [s - ints[i], ints[i]];
    }
    seen.add(ints[i]);
  }
  return undefined;
}
