//JavaScript: 5 kyu - Rot13
//https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message) {
  // Crear una variable vacía para almacenar el mensaje cifrado
  var ciphered = "";

  // Iterar sobre cada caracter del mensaje de entrada
  for (var i = 0; i < message.length; i++) {
    // Obtener el código ASCII del caracter actual
    var charCode = message.charCodeAt(i);

    // Verificar si el caracter actual es una letra mayúscula o minúscula
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      // Si es una letra, calcular su nuevo código ASCII sumando 13
      var cipheredCharCode = charCode + 13;

      // Verificar si el nuevo código ASCII es mayor a Z o z
      if ((charCode <= 90 && cipheredCharCode > 90) || (charCode <= 122 && cipheredCharCode > 122)) {
        // Si es mayor, restar 26 para volver al principio del alfabeto
        cipheredCharCode -= 26;
      }

      // Añadir el caracter cifrado a la cadena resultante
      ciphered += String.fromCharCode(cipheredCharCode);
    } else {
      // Si no es una letra, simplemente añadir el caracter original a la cadena resultante
      ciphered += message[i];
    }
  }
  // retornar el mensaje cifrado
  return ciphered;
}
