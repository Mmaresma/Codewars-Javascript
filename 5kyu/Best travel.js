//JavaScript: 5 kyu - Best travel
//https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa

function chooseBestSum(t, k, ls) {
  // Generar todas las combinaciones de k elementos de ls
  const combinations = generateCombinations(ls, k);

  // Inicializar el resultado en null (en caso de que no se encuentre ninguna combinación válida)
  let bestSum = null;

  // Para cada combinación
  for (const combination of combinations) {
    // Calcular la suma de los elementos de la combinación
    const sum = combination.reduce((acc, x) => acc + x, 0);

    // Si la suma es mayor al límite t, seguir con la siguiente combinación
    if (sum > t) continue;

    // Si la suma es mayor a la mejor suma encontrada hasta ahora, actualizar el resultado
    if (sum > bestSum) bestSum = sum;
  }

  return bestSum;
}

// Esta función auxiliar genera todas las combinaciones de k elementos de la lista ls
function generateCombinations(ls, k) {
  const combinations = [];

  function generate(combination, index) {
    if (combination.length === k) {
      combinations.push([...combination]);
      return;
    }

    for (let i = index; i < ls.length; i++) {
      combination.push(ls[i]);
      generate(combination, i + 1);
      combination.pop();
    }
  }

  generate([], 0);

  return combinations;
}
