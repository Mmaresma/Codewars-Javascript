//JavaScript: 5 kyu - RGB To Hex Conversion
//https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b) {
  // Limitar cada valor a un rango válido de 0 a 255
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  
  // Convertir cada valor a hexadecimal y añadir un cero a la izquierda si es necesario
  let rHex = r.toString(16).padStart(2, "0");
  let gHex = g.toString(16).padStart(2, "0");
  let bHex = b.toString(16).padStart(2, "0");
  
  // Concatenar los valores hexadecimales y devolver el resultado en mayúsculas
  return (rHex + gHex + bHex).toUpperCase();
}
