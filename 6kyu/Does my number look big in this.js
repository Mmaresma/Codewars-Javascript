//JavaScript: 6 kyu - Does my number look big in this?
//https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
  // Convertir el número a una cadena de caracteres
  const numStr = value.toString();
  // Determinar la longitud de la cadena
  const numLength = numStr.length;
  // Inicializar una variable para almacenar la suma de los dígitos elevados al exponente determinado
  let sum = 0;
  // Iterar sobre cada dígito de la cadena
  for (let i = 0; i < numLength; i++) {
    // Calcular el resultado de elevar el dígito al exponente determinado y sumarlo a la variable sum
    sum += Math.pow(numStr[i], numLength);
  }
  // Comparar el resultado de la suma con el número original
  return sum === value;
}
