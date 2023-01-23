//JavaScript: 5 kyu - Longest Common Subsequence
//https://www.codewars.com/kata/52756e5ad454534f220001ef


function LCS(A, B) {
  let cadena ='';
  let num = 0;
  for (let i=0;i<B.length;i++){
  for (let j=num;j<A.length;j++)
    if (A[j]===B[i]){
      cadena+=B[i];
      num=++j;
      break;
    }
  }
  return cadena;
}
