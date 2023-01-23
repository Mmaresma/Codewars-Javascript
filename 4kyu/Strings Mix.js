//JavaScript: 4 kyu - Strings Mix
//https://www.codewars.com/kata/5629db57620258aa9d000014

const abecedario = "abcdefghijklmnopqrstuvwxyz".split("");

function mix(cadena1, cadena2) {
  return abecedario
    .map(char => {
      const ContadorCadena1 = cadena1.split("").filter(x => x === char).length,
        ContadorCadena2 = cadena2.split("").filter(x => x === char).length,
        maxCount = Math.max(ContadorCadena1, ContadorCadena2);

      return {char: char,count: maxCount,src: maxCount > ContadorCadena1 ? "2" : maxCount > ContadorCadena2 ? "1" : "="};
				})
    .filter(x => x.count > 1)
    .sort(
      (A, B) =>
        B.count - A.count ||
        (A.src + A.char > B.src + B.char ? 1 : -1)
    )
    .map(x => `${x.src}:${x.char.repeat(x.count)}`)
    .join("/");
}
