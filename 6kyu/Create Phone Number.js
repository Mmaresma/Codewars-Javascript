//JavaScript: 6 kyu - Create Phone Number
//https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers) {
  const numberString = numbers.join('');
  const areaCode = numberString.substring(0, 3);
  const firstThree = numberString.substring(3, 6);
  const lastFour = numberString.substring(6);
  return `(${areaCode}) ${firstThree}-${lastFour}`;
}
