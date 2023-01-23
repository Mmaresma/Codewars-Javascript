//JavaScript: 5kyu - String incrementer
//https://www.codewars.com/kata/54a91a4883a7de5d7800009c
 
function incrementString(strng) {
  let match = strng.match(/\d+$/);
  if (match) {
    let num = match[0];
    let numLen = num.length;
    num = (parseInt(num) + 1).toString();
    while (num.length < numLen) {
      num = "0" + num;
    }
    return strng.slice(0, -numLen) + num;
  } else {
    return strng + "1";
  }
}
