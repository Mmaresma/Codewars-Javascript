// Weight for weight
// https://www.codewars.com/kata/55c6126177c9441a570000cc/javascript

function orderWeight(strng) {
 const sumGlobal = (cadena1)=>cadena1.split('').reduce((sumGlobal,el)=>(sumGlobal+(+el)),0);
  function compara(uno,dos){
    let suma1 = sumGlobal(uno);
    let suma2 = sumGlobal(dos);
    return suma1 === suma2 ? uno.localeCompare(dos) : suma1 - suma2;
   };
 return strng.split(' ').sort(compara).join(' ');
}
