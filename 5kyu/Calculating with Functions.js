//JavaScript: 5 kyu - Calculating with Functions
//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function nine() {}
function plus() {}
function minus() {}
function times() {}
function dividedBy() {}
function zero(operation) {
  return operation ? operation(0) : 0;
}
function one(operation) {
  return operation ? operation(1) : 1;
}
function two(operation) {
  return operation ? operation(2) : 2;
}
function three(operation) {
  return operation ? operation(3) : 3;
}
function four(operation) {
  return operation ? operation(4) : 4;
}
function five(operation) {
  return operation ? operation(5) : 5;
}
function six(operation) {
  return operation ? operation(6) : 6;
}
function seven(operation) {
  return operation ? operation(7) : 7;
}
function eight(operation) {
  return operation ? operation(8) : 8;
}
function nine(operation) {
  return operation ? operation(9) : 9;
}
function plus(y) {
  return function(x) {
    return x + y;
  }
}
function minus(y) {
  return function(x) {
    return x - y;
  }
}
function times(y) {
  return function(x) {
    return x * y;
  }
}
function dividedBy(y) {
  return function(x) {
    return Math.floor(x / y);
  }
}
