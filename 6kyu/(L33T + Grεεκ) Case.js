//JavaScript: 6 kyu - (L33T + Grεεκ) Case
//https://www.codewars.com/kata/556025c8710009fc2d000011

function GrεεκL33t(str) {
  let letterMap = {
    A: 'α', 
    B: 'β',
    D: 'δ',
    E: 'ε',
    I: 'ι',
    K: 'κ',
    N: 'η',
    O: 'θ',
    P: 'ρ',
    R: 'π',
    T: 'τ',
    U: 'μ',
    V: 'υ',
    W: 'ω',
    X: 'χ',
    Y: 'γ'
  };
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    char = letterMap[char.toUpperCase()] || char;
    result += char.toLowerCase();
  }
  
  return result;
}
