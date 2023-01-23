//JavaScript: 5 kyu - Merged String Checker
//https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa

function isMerge(s, part1, part2) {
	let cadena=s;
	let p1 = part1;
	let p2 = part2;
  return !cadena ? !(p1 || p2) :
    cadena[0] == p1[0] && isMerge(cadena.slice(1), p1.slice(1), p2) ||
    cadena[0] == p2[0] && isMerge(cadena.slice(1), p1, p2.slice(1));
}
