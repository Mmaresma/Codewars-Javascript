//JavaScript: 5 kyu  - Memoized Fibonacci
//https://www.codewars.com/kata/529adbf7533b761c560004e5

function fibonacci(n) {
  if (n < 2)
    return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

var fibonacci = function(num){
    if(num==0 || num == 1)
        return num;
  let vArray=[1,1];
  for (let variable=1;variable<num;variable++){
	  vArray.push(vArray[variable-1]+vArray[variable]);
	  }
    return vArray[vArray.length-2];
}
