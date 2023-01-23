//JavaScript: 6 kyu - Decode the Morse code
//https://www.codewars.com/kata/54b724efac3d5402db00065e

decodeMorse = function(codigoMorse){
  //Dividir el codigoMorse en palabras utilizando espacios como separador
  let palabras = codigoMorse.split(' ');
  //Iterar a través de cada elemento de la matriz resultante de palabras
  palabras = palabras.map((v,i)=>{
      //Buscar el equivalente en el código Morse en un objeto global llamado MORSE_CODE
      if(MORSE_CODE[v] != undefined){
        // Si existe en el objeto se reemplaza por su valor
        return MORSE_CODE[v];
      }else{
         // si no existe en el objeto se reemplaza por 1
        return 1;
      }
  });
  // Unir todo el texto en una sola cadena
  let resultado = palabras.join('');
  //eliminar espacios adicionales
  resultado = resultado.replace(/11/g,' ');
  resultado = resultado.replace(/1/g,' ');
  resultado = resultado.trim();
  // Devolver el resultado final
  return resultado;
}
