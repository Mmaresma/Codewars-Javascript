//JavaScript: 6 kyu - Take a Ten Minutes Walk
//https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {

  if (walk.length !== 10) {
    return false;
  }

  let northSouth = 0;
  let eastWest = 0;

  for (const direction of walk) {
    if (direction === 'n') {
      northSouth += 1;
    } else if (direction === 's') {
      northSouth -= 1;
    } else if (direction === 'e') {
      eastWest += 1;
    } else if (direction === 'w') {
      eastWest -= 1;
    }
  }

  return northSouth === 0 && eastWest === 0;
}
