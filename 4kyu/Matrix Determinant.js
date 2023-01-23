//JavaScript: 4 kyu - Matrix Determinant
//https://www.codewars.com/kata/52a382ee44408cea2500074c

function determinant(m) {
  var N = m.length;
  if (N == 1) {
    return m[0][0];
  }
  if (N == 2) {
    return m[0][0] * m[1][1] - m[1][0] * m[0][1];
  }
  var d = 0;
  for (var i = 0; i < N; i++) {
    var minor = getMinor(m, 0, i);
    d += Math.pow(-1, i) * m[0][i] * determinant(minor);
  }
  return d;
}

function getMinor(m, row, col) {
  var minor = [];
  for (var i = 0; i < m.length; i++) {
    if (i == row) continue;
    var minorRow = [];
    for (var j = 0; j < m[i].length; j++) {
      if (j == col) continue;
      minorRow.push(m[i][j]);
    }
    minor.push(minorRow);
  }
  return minor;
}
