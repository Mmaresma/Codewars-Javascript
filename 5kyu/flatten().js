// flatten()
// https://www.codewars.com/kata/513fa1d75e4297ba38000003/javascript

function flatten() {
  var flattened = [];
  for (var i = 0; i < arguments.length; i++) {
    var current = arguments[i];
    if (Array.isArray(current)) {
      flattened = flattened.concat(flatten.apply(null, current));
    } else {
      flattened.push(current);
    }
  }
  return flattened;
}
console.log(flatten(1, [2, 3], 4, 5, [6, [7, [8]]])); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']])); // ['a', 'b', 2, 3, null, 4, 'c']
