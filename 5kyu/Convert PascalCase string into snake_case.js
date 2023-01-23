//JavaScript: 5 kyu - Convert PascalCase string into snake_case
//https://www.codewars.com/kata/529b418d533b76924600085d


function toUnderscore(string) {
  if (typeof string !== 'string') {
    return String(string);
  }
  return (''+string).replace(/(.)([A-Z])/g, '$1_$2').toLowerCase();
}
