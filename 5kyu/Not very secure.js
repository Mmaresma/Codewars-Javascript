//JavaScript: 5 kyu  - Not very secure
//https://www.codewars.com/kata/526dbd6c8c0eb53254000110

function alphanumeric(cadena){
  return /[a-zA-Z0-9]/g.test(cadena)&&!/[\s_!]/.test(cadena)
}
