//JavaScript: 5kyu - Simple Pig Latin
//https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.match(/^[a-zA-Z]+$/)) {
      word = word.slice(1) + word[0] + 'ay';
    }
    words[i] = word;
  }
  return words.join(' ');
}
