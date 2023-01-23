//JavaScript: 4 kyu - Sum Strings as Numbers
//https://www.codewars.com/kata/5324945e2ece5e1f32000370

function sumStrings(a, b) {
  let result = '';
  let carry = 0;

  let maxLength = Math.max(a.length, b.length);

  for (let i = 0; i < maxLength; i++) {
    let aDigit = parseInt(a[a.length - 1 - i]) || 0;
    let bDigit = parseInt(b[b.length - 1 - i]) || 0;

    let sum = aDigit + bDigit + carry;
    carry = Math.floor(sum / 10);
    sum %= 10;

    result = sum + result;
  }

  if (carry > 0) {
    result = carry + result;
  }

  // Remove leading zeros
  while (result[0] === '0') {
    result = result.slice(1);
  }

  return result;
}
