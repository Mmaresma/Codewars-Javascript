//JavaScript: 3 kyu - The Millionth Fibonacci Kata
//https://www.codewars.com/kata/53d40c1e2f13e331fc000c26

const m = fun => ( cache => numero => numero in cache ? cache[numero] : cache[numero] = fun(numero) ) ( [0n,1n] ) ;
const e = numero => ! (numero&1) ;
const Fib = m( numero =>
  numero%3===0 ? ( numero => 5n * Fib(numero)**3n + 3n * ( e(numero) ? 1n : -1n ) * Fib(numero) ) ( numero/3 ) :
  numero%3===1 ? ( numero => Fib(numero+1)**3n + 3n * Fib(numero+1) * Fib(numero)**2n - Fib(numero)**3n ) ( (numero-1)/3 ) :
            ( numero => Fib(numero+1)**3n + 3n * Fib(numero+1)**2n * Fib(numero) + Fib(numero)**3n ) ( (numero-2)/3 )
);
const fib = numero => numero>=0 ? Fib(numero) : e(numero) ? -Fib(-numero) : Fib(-numero) ;
