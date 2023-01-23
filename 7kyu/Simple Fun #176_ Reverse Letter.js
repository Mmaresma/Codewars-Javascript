//JavaScript: 7 kyu - Simple Fun #176: Reverse Letter
//https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

function reverseLetter(str) {
  // Eliminar todos los caracteres no alfabéticos
  str = str.replace(/[^a-z]/gi, '');
  
  // Invertir la cadena
  return str.split('').reverse().join('');
}
