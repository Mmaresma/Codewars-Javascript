//JavaScript: 4 kyu - Catching Car Mileage Numbers
//https://www.codewars.com/kata/52c4dd683bfd3b434c000292

// Declarar una función "chars" que toma un número y lo convierte en un arreglo de caracteres
const chars = (numero) => numero.toString().split("");

// Declarar una función "match" que toma una cadena y devuelve una nueva función que comprueba si el número dado está presente en la cadena dada
const match = (cadena) => (numero) => new RegExp(numero).test(cadena);

// Declarar un arreglo "testeo" que contiene funciones que comprueban si un número cumple con ciertas condiciones
const testeo = [
  match("1234567890"), // incremental
  match("9876543210"), // decremental
  (numero) => /^\d[0]+$/.test(numero), // todos son ceros
  (numero) => numero == chars(numero).reverse().join(""), // palindromo
  (numero) => [...new Set(chars(numero))].length === 1, // repetido
];

// Declarar una función "test" que toma un número y un arreglo, y devuelve verdadero si el número cumple con alguna de las condiciones en el arreglo "testeo" o si el número está presente en el arreglo dado
const test = (numero, xyz) => (numero > 99 && (xyz.indexOf(numero) > -1 || testeo.map((t) => t(numero)).some((x) => !!x)));

// Declarar una función "isInteresting" que toma un número y un arreglo, y devuelve 2 si el número cumple con alguna de las condiciones en el arreglo "testeo" o si el número está presente en el arreglo dado, o devuelve verdadero si el número + 1 o el número + 2 cumple con alguna de las condiciones.
const isInteresting = (numero, xyz) => (test(numero, xyz) ? 2 : +(test(numero + 1, xyz) || test(numero + 2, xyz)));
