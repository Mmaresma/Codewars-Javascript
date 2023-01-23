//JavaScript: 6 kyu - 1RM Calculator
//https://www.codewars.com/kata/595bbea8a930ac0b91000130

function calculate1RM(w, r) {
  if(!Number.isFinite(w) || !Number.isFinite(r) ) return null 
  if (r === 1) {
    return w;
  } else if (r === 0) {
    return 0;
  } else {
    const epley = w * (1 + (r / 30));
    const mcGlothin = (100 * w) / (101.3 - 2.67123 * r);
    const lombardi = w * (r ** 0.1);
    return Math.round(Math.max(epley, mcGlothin, lombardi));
  }
}
