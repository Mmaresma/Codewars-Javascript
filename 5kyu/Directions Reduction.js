//JavaScript: 5 kyu - Directions Reduction
//https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr){
  var opposite = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "EAST": "WEST",
    "WEST": "EAST"
  };
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (newArr.length > 0 && newArr[newArr.length-1] === opposite[arr[i]]) {
      newArr.pop();
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
