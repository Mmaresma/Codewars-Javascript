//JavaScript: 6 kyu - +1 Array
//https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

function upArray(arr) {
  if (arr.length === 0) {
    return null;
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || arr[i] > 9) {
      return null;
    }
  }
  
  let carry = 1;
  
  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i] + carry;
    arr[i] = current % 10;
    carry = Math.floor(current / 10);
    if (carry === 0) {
      break;
    }
  }
  
  if (carry > 0) {
    arr.unshift(carry);
  }
  
  return arr;
}
