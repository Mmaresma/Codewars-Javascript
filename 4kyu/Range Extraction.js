//JavaScript: 4 kyu - Range Extraction
//https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

function solution(list) {

  var result = '';
  var temp = [];

  for (var i = 0; i < list.length; i++) {
    if (temp.length > 0 && list[i] - temp[temp.length - 1] === 1) {
      temp.push(list[i]);
    } else {
      if (temp.length >= 3) {
        result += temp[0] + '-' + temp[temp.length - 1] + ',';
      } else {
        for (var j = 0; j < temp.length; j++) {
          result += temp[j] + ',';
        }
      }
      temp = [list[i]];
    }
  }

  if (temp.length >= 3) {
    result += temp[0] + '-' + temp[temp.length - 1] + ',';
  } else {
    for (var j = 0; j < temp.length; j++) {
      result += temp[j] + ',';
    }
  }

  return result.slice(0, -1);
}
