//JavaScript: 5 kyu - Scramblies
//https://www.codewars.com/kata/55c04b4cc56a697bb0000048

function scramble(str1, str2) {
  let letterCount = {};
  
  // Contar las ocurrencias de cada letra en str1
  for (let i = 0; i < str1.length; i++) {
    if (!letterCount[str1[i]]) {
      letterCount[str1[i]] = 1;
    } else {
      letterCount[str1[i]]++;
    }
  }
  
  // Verificar si hay suficientes ocurrencias de cada letra en str2
  for (let i = 0; i < str2.length; i++) {
    if (!letterCount[str2[i]] || letterCount[str2[i]] === 0) {
      return false;
    } else {
      letterCount[str2[i]]--;
    }
  }
  
  return true;
}
