//JavaScript: 6 kyu - More Zeros than Ones
//https://www.codewars.com/kata/5d41e16d8bad42002208fe1a

function moreZeros(s) {
  const result = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const asciiValue = char.charCodeAt(0);
    const binary = asciiValue.toString(2);
    const ones = binary.split('1').length - 1;
    const zeros = binary.split('0').length - 1;
    if (zeros > ones && !result.includes(char)) {
      result.push(char);
    }
  }
  return result;
}
