//JavaScript: 7 kyu - Factorial
//https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

function factorial(n)
{
  if (n === 0) {
    return 1;
  } else if (n < 0 || n > 12) {
    throw new RangeError('Error');
  } else {
    return n * factorial(n-1)
  }
}
