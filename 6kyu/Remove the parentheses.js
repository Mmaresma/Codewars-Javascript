//JavaScript: 6 kyu - Remove the parentheses
//https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8

function removeParentheses(s) {
  // Utiliza expresiones regulares para buscar paréntesis y el contenido entre ellos
  var regex = /\(([^()]*)\)/;
  // Si hay paréntesis en la cadena, elimina el primer par y llama a la función de nuevo
  // con la cadena resultante
  while (regex.test(s)) {
    s = s.replace(regex, '');
  }
  // Devuelve la cadena sin paréntesis
  return s;
}
