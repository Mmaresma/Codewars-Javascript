//JavaScript: 6 kyu - Backspaces in string
//https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

function cleanString(s) {
  let result = '';
  for (const c of s) {
    if (c === '#') {
      result = result.slice(0, -1);
    } else {
      result += c;
    }
  }
  return result;
}
