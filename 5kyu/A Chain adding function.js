//JavaScript: 5 kyu - A Chain adding function
//https://www.codewars.com/kata/539a0e4d85e3425cb0000a88

var add = function(n) { // Declara una función llamada "add" que toma un argumento "n"
  const suma = num => add(n + num); // Declara una función "suma" con una función flecha que llama a "add" con "n + num" como argumento
  suma.valueOf = () => n; // Asigna una función flecha que devuelve "n" como el valor de "valueOf" de "suma"
  return suma; // Devuelve "suma"
}
