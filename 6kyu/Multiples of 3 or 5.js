//JavaScript: 6 kyu - Multiples of 3 or 5
//https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
  const numbers = Array.from({ length: number - 1 }, (_, i) => i + 1);
  const multiples = numbers.filter(n => n % 3 === 0 || n % 5 === 0);
  return multiples.reduce((acc, n) => acc + n, 0);
}
