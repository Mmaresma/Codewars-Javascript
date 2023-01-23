//JavaScript: 4 kyu - parseInt() reloaded
//https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5

const Palabras = {
  zero: 0,one: 1,two: 2,three: 3,four: 4,five: 5,six: 6,seven: 7,eight: 8,nine: 9,ten: 10,
  eleven: 11,twelve: 12,thirteen: 13,fourteen: 14,fifteen: 15,sixteen: 16, seventeen: 17,eighteen: 18,nineteen: 19,twenty: 20,
  thirty: 30,forty: 40,fifty: 50,sixty: 60,seventy: 70,eighty: 80,ninety: 90
};
const A = { hundred: 100, thousand: 1000, million: 1000000 };
function parseInt(Cadena) {
  return Cadena.split(/ |-/).reduce(function(valor, Palabra) {
    if (Palabras[Palabra]) valor += Palabras[Palabra];
    if (A[Palabra])
      valor += A[Palabra] * (valor % A[Palabra]) - (valor % A[Palabra]);
    return valor;
  }, 0);
}
