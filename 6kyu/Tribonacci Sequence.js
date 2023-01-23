//JavaScript: 6 kyu - Tribonacci Sequence
//https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature, n) {
  // Si n es igual a cero, devolvemos un arreglo vacío
  if (n === 0) {
    return [];
  }

  // Inicializamos un arreglo resultado con los elementos de signature
  let result = signature.slice();

  // Añadimos elementos a result mientras su longitud sea menor a n
  while (result.length < n) {
    // Calculamos el siguiente elemento de la secuencia sumando los últimos tres elementos de result
    let next = result[result.length - 1] + result[result.length - 2] + result[result.length - 3];
    // Añadimos el siguiente elemento a result
    result.push(next);
  }

  // Devolvemos los primeros n elementos de result
  return result.slice(0, n);
}
