//JavaScript: 5 kyu - Bit calculator
//https://www.codewars.com/kata/52ece9de44751a64dc0001d9

function calculate(num1, num2) {
  var decimal1 = 0;
  var decimal2 = 0;
  for (var i = 0; i < num1.length; i++) {
    decimal1 += (num1.charCodeAt(i) - 48) * Math.pow(2, num1.length - 1 - i);
  }
  for (var i = 0; i < num2.length; i++) {
    decimal2 += (num2.charCodeAt(i) - 48) * Math.pow(2, num2.length - 1 - i);
  }
  return decimal1 + decimal2;
}
