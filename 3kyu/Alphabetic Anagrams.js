//JavaScript: 3 kyu - Alphabetic Anagrams
//https://www.codewars.com/kata/53e57dada0cb0400ba000688

// Función para calcular el Factorial de un número
const NumeroFactorial = num => (num < 2) ? 1 : NumeroFactorial(num - 1) * num;

// Función para contar las permutaciones con repetición de una secuencia
const contadorPermutaciones = (secuencia) => {
    // Contamos cuántas veces se repite cada elemento en la secuencia
    const elementosduplicados = Object.values(
        secuencia.reduce((accumulator, element) => ({...accumulator, [element]: (accumulator[element] || 0) + 1}), {})
    )
    // Calculamos el NumeroFactorial de cada cantidad de repeticiones
    .reduce((accumulator, element) => accumulator * NumeroFactorial(element), 1);

    // Dividimos el NumeroFactorial del tamaño de la secuencia entre el producto de los factoriales de las repeticiones
    return NumeroFactorial(secuencia.length) / elementosduplicados;
};

// Solución al problema
function listPosition(string) {
    // Convertimos la cadena en un array
    const array = string.split('');
    let order = 1;

    // Recorremos el array
    for (let i = 0; i < array.length; i++) {
        // Creamos un conjunto vacío
        const set = new Set();
        // Recorremos el array desde la posición siguiente a la actual
        for (let j = i + 1; j < array.length; j++) {
            // Si el elemento actual es menor que el elemento en la posición i y no está en el conjunto
            if (array[j] < array[i] && !set.has(array[j])) {
                // Añadimos el elemento al conjunto
                set.add(array[j]);
                // Incrementamos el orden en la cantidad de permutaciones con repetición de los elementos desde i hasta j, excluyendo a j
                order += contadorPermutaciones([...array.slice(i, j), ...array.slice(j + 1)]);
            }
        }
    }

    // Devolvemos el orden
    return order
}
