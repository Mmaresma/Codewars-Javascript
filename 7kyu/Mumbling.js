//JavaScript: 7 kyu - Mumbling
//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
  const chars = s.split('');
  const result = [];
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    result.push(c.toUpperCase() + c.toLowerCase().repeat(i));
  }
  return result.join('-');
}
