//JavaScript: 4 kyu - Next bigger number with the same digits
//https://www.codewars.com/kata/55983863da40caa2c900004e

function nextBigger(n) {
    // Convertimos el número a un arreglo de dígitos
    var digits = n.toString().split("").map(Number);
  
    // Buscamos el primer dígito menor que el siguiente a su derecha
    for (var i = digits.length - 1; i > 0; i--) {
        if (digits[i] > digits[i - 1]) {
            break;
        }
    }
  
    // Si no se encuentra un dígito menor, significa que no se puede formar un número mayor
    if (i === 0) {
        return -1;
    }
  
    // Buscamos el primer dígito mayor que el dígito encontrado anteriormente
    var j = i;
    for (j; j < digits.length; j++) {
        if (digits[j] <= digits[i - 1]) {
            break;
        }
    }
    j--;
  
    // Intercambiamos los dos dígitos encontrados
    var temp = digits[i - 1];
    digits[i - 1] = digits[j];
    digits[j] = temp;
  
    // Ordenamos los dígitos a la derecha del dígito encontrado
    var right = digits.slice(i).sort();
    digits = digits.slice(0, i).concat(right);
  
    // Convertimos el arreglo de dígitos de vuelta a un número
    var nextBiggerNumber = parseInt(digits.join(""));
  
    return nextBiggerNumber;
}
