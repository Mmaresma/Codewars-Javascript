//JavaScript: 5 kyu - Last digit of a large number
//https://www.codewars.com/kata/5511b2f550906349a70004e

var lastDigit = function(Cadena1, Cadena2){  
  return +!+Cadena2 || Math.pow(Cadena1.slice(-1) % 10, Cadena2.slice(-2) % 4 || 4) % 10
}
