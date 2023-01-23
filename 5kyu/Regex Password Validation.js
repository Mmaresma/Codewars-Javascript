//JavaScript: 5 kyu - Regex Password Validation
//https://www.codewars.com/kata/52e1476c8147a7547a000811

const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})[a-zA-Z0-9]+$/;
/*
^ = inicio de línea
(?=.*[a-z]) = al menos un caracter minúscula
(?=.*[A-Z]) = al menos un caracter mayúscula
(?=.*[0-9]) = al menos un caracter numérico
(?=.{6,}) = al menos 6 caracteres
[a-zA-Z0-9] = valores numericos
$ = fin de línea
*/
