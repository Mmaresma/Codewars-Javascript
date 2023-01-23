//JavaScript: 5 kyu - First non-repeating character
//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(s) {
  let lowerCaseString = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (lowerCaseString.indexOf(s[i].toLowerCase()) === lowerCaseString.lastIndexOf(s[i].toLowerCase())) {
      if (s[i] === s[i].toUpperCase()) {
        return s[i];
      } else {
        return s[i].toLowerCase();
      }
    }
  }
  return '';
}
