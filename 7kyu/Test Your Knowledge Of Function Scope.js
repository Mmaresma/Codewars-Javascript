//JavaScript: 7 kyu - Test Your Knowledge Of Function Scope
//https://www.codewars.com/kata/56d344c7fd3a52566700124b

function add(x) {
  return function(y) {
    return x + y;
  }
}
