//JavaScript: 5 kyu - Moving Zeros To The End
//https://www.codewars.com/kata/52597aa56021e91c93000cb0

const moveZeros = function (arreglo) {
  return [...arreglo.filter(x => x !== 0), ...arreglo.filter(x => x === 0)]
}
