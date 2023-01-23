//JavaScript: 4 kyu - Adding Big Numbers
//https://www.codewars.com/kata/525f4206b73515bffb000b21

function add(a, b) {
  // Initialize result
  let result = "";

  // Initialize carry
  let carry = 0;

  // Initialize indices for a and b
  let i = a.length - 1;
  let j = b.length - 1;

  // Loop through both strings starting from the last characters
  while (i >= 0 || j >= 0 || carry > 0) {
    // Get the current digits for a and b
    let x = 0;
    let y = 0;
    if (i >= 0) {
      x = a[i] - '0';
      i--;
    }
    if (j >= 0) {
      y = b[j] - '0';
      j--;
    }

    // Add the digits and carry, and get the result
    let sum = x + y + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }

  return result;
}
