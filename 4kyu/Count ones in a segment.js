//JavaScript: 4 kyu - Count ones in a segment
//https://www.codewars.com/kata/596d34df24a04ee1e3000a25

// funcion para obtener el patron comun en cada columna de la representacion binaria
const patron = (numero, PosicionColumna) => (1 << PosicionColumna) * (numero >> (PosicionColumna + 1));

// funcion para obtener el numero de unos en el resto de la representacion binaria
const restoDeBinario = (numero, PosicionColumna) =>
  Math.max(0, (numero % ((1 << PosicionColumna) << 1)) - (1 << PosicionColumna) + 1);

// funcion para calcular la cantidad de unos en una columna
const column = (numero, PosicionColumna) =>
  patron(numero, PosicionColumna) + restoDeBinario(numero, PosicionColumna);

// funcion para sumar la cantidad de unos en todas las columnas
const addUpTo = numero => {
  let bit = 0, // representacion de la posicion del bit 
    total = 0; // representacion del total de unos
  while (numero >> bit > 0) total += column(numero, bit++);
  return total;
};

// funcion principal para calcular la cantidad de unos en un rango dado
const countOnes = (izquierda, derecha) => addUpTo(derecha) - addUpTo(izquierda - 1);
