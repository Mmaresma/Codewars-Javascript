//JavaScript: 4 kyu - Multiplying numbers as strings
//https://www.codewars.com/kata/55911ef14065454c75000062

function multiply(a, b) {
  // Dividir cada argumento en un array de caracteres y revertirlo
  var Argumento1 = a.split("").reverse();
  var Argumento2 = b.split("").reverse();

  // Crear una pila vacía para guardar los resultados de las multiplicaciones
  var Pila = [];

  // Ciclo anidado para multiplicar cada caracter de un array con cada caracter del otro array
  for (var x = 0; x < Argumento1.length; x++) {
    for (var j = 0; j < Argumento2.length; j++) {
      var m = Argumento1[x] * Argumento2[j];
      Pila[x + j] = Pila[x + j] ? Pila[x + j] + m : m;
    }
  }

  // Ciclo para manejar los casos en los que el resultado de la multiplicación tiene más de un dígito
  for (var x = 0; x < Pila.length; x++) {
    var num = Pila[x] % 10;
    var move = Math.floor(Pila[x] / 10);
    Pila[x] = num;

    if (Pila[x + 1]) Pila[x + 1] += move;
    else if (move != 0) Pila[x + 1] = move;
  }

  // Invertir el orden de los elementos en la pila, unirlos en una cadena y eliminar los ceros no significativos al principio
  return Pila
    .reverse()
    .join("")
    .replace(/^(0(?!$))+/, "");
}
