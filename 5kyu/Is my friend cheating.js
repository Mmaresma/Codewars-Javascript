//JavaScript: 5 kyu - Is my friend cheating?
//https://www.codewars.com/kata/5547cc7dcad755e480000004

function removeNb (n) {
    var res = [];
    for (var num1 = 1; num1 <= n; num1++) {
      var num2 = (n * (n + 1) / 2 - num1) / (num1 + 1);
      if (num2 % 1 === 0 && num2 <= n) {
          res.push([num1, num2]);
      }
    }
    return res;
  }