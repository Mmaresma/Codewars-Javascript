//JavaScript: 6 kyu - Pascal's Triangle #2
//https://www.codewars.com/kata/52945ce49bb38560fe0001d9

function pascal(depth) {
  
  const result = [[1]];
  for (let i = 1; i < depth; i++) {
    const row = [1];
    const prevRow = result[i - 1];

    for (let j = 1; j < prevRow.length; j++) {
      row.push(prevRow[j] + prevRow[j - 1]);
    }

    row.push(1);

    result.push(row);
  }

  return result;
}
