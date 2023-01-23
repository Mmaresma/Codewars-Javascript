//JavaScript: 6 kyu - Multiplication table
//https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

multiplicationTable = function(size) {
  // Crear una matriz vacía que almacenará los valores de la tabla
  const table = [];

  // Recorrer las filas de la tabla
  for (let i = 1; i <= size; i++) {
    // Crear una fila vacía para almacenar los valores de la fila actual
    const row = [];

    // Recorrer las columnas de la tabla
    for (let j = 1; j <= size; j++) {
      // Calcular el valor de la celda como el producto de la fila por la columna
      const cellValue = i * j;
      // Añadir el valor de la celda a la fila actual
      row.push(cellValue);
    }

    // Añadir la fila a la tabla
    table.push(row);
  }

  // Devolver la tabla completa
  return table;
}
