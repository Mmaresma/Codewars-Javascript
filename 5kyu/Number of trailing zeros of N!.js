//JavaScript: 5 kyu - Number of trailing zeros of N!
//https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

function zeros (n) {
  let ceros = 0;
  let num = n;
  while(num>0){
    num=Math.floor(num/5);
    ceros+=num
  }
  return ceros;
}
