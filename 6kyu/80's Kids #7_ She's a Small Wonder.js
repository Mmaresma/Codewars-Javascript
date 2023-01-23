//JavaScript: 6 kyu - 80's Kids #7: She's a Small Wonder
//https://www.codewars.com/kata/56743fd3a12043ffbb000049

function Robot() {
  // Inicializa un arreglo para contener las palabras que el robot conoce
  this.arr =['i', 'already', 'know', 'the', 'word','thank', 'you', 'for','me','teaching','understand']
}

Robot.prototype.learnWord = function(word) {
  // Verifica si la palabra contiene caracteres no alfabéticos, dígitos o espacio en blanco
  if (/\W|\d|\s/i.test(word)||!word) return "I do not understand the input"
  // Verifica si el robot ya conoce la palabra
  if (!this.arr.includes(word.toLowerCase())){
  // Si el robot no conoce la palabra, agréguela a la lista de palabras que conoce
  this.arr.push(word.toLowerCase())
  return `Thank you for teaching me ${word}`
  }else
  return `I already know the word ${word}`
}
