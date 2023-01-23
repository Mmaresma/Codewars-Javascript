//JavaScript: 6 kyu - Your order, please
//https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words) {
  // divide el string en un arreglo de palabras
  const arr = words.split(' ');

  // crea un arreglo vacío para guardar las palabras en el orden correcto
  const orderedArr = [];

  // recorre cada palabra del arreglo
  for (const word of arr) {
    // busca el número en la palabra
    for (let i = 0; i < word.length; i++) {
      if (isFinite(word[i])) {
        // agrega la palabra al índice correcto en el nuevo arreglo
        orderedArr[word[i] - 1] = word;
        break;
      }
    }
  }

  // une el arreglo nuevamente en un string y retorna el resultado
  return orderedArr.join(' ');
}
