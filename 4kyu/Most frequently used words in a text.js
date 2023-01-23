//JavaScript: 4 kyu - Most frequently used words in a text
//https://www.codewars.com/kata/51e056fe544cf36c410000fb

function topThreeWords(texto) {
  // Crea un arreglo vacío para guardar las palabras con sus respectivos conteos
  const arreglo = []
  
  // Convertir el texto a minúsculas, dividirlo en un arreglo de palabras y filtrar las palabras vacías
  texto = texto.toLowerCase().split` `.map(vacio=>{
    if (vacio===`'`) return ''
    return vacio.replace(/[^'a-z]/gi,'')
  }).filter(vacio=>vacio)
  // Crea un objeto con las ocurrencias de cada palabra
  const obj = texto.reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{})
  // Itera sobre el objeto para crear una matriz de pares [palabra, conteo]
  for (let i in obj){
    arreglo.push([i,obj[i]])
  }
  // Ordena la matriz en función del conteo de la palabra y devuelve las primeras tres palabras
  return arreglo.sort((a,b)=>b[1]-a[1]).slice(0,3).map(vacio=>vacio[0])
}
