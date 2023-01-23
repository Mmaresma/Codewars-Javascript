//JavaScript: 7 kyu - Shortest Word
//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

const findShort = s => {
  const words = s.split(' ');
  let minLength = Number.MAX_VALUE;
  for (const word of words) {
    minLength = Math.min(minLength, word.length);
  }
  return minLength;
};
