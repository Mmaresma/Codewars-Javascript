//JavaScript: 6 kyu - Persistent Bugger.
//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  let times = 0; // Contador de veces que se ha multiplicado

  // Mientras el número tenga más de un dígito...
  while (num.toString().length > 1) {
    let digits = num.toString().split(''); // Separa los dígitos del número
    num = digits.reduce((a, b) => a * b); // Multiplica todos los dígitos
    times++; // Incrementa el contador
  }

  return times; // Devuelve el contador
}
