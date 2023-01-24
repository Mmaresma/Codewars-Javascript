// What's a Perfect Power anyway?
// https://www.codewars.com/kata/54d4c8b08776e4ad92000835/javascript


function isPP(natural_n) {
  for (var natural_m = 2; natural_m * natural_m <= natural_n; ++ natural_m)
    for (var exponencial = 2; Math.pow(natural_m, exponencial) <= natural_n; ++ exponencial)
      if (Math.pow(natural_m, exponencial) == natural_n){
		  return [natural_m, exponencial];
	  }
  return null;
}
