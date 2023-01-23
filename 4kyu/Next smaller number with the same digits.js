//JavaScript: 4 kyu - Next smaller number with the same digits
//https://www.codewars.com/kata/5659c6d896bc135c4c00021e

function nextSmaller(n) {
    var digits = n.toString().split("").map(Number);
    for (var i = digits.length - 1; i > 0; i--) {
        if (digits[i] < digits[i - 1]) {
            break;
        }
    }
    if (i === 0) {
        return -1;
    }
    var j = i;
    for (j; j < digits.length; j++) {
        if (digits[j] >= digits[i - 1]) {
            break;
        }
    }
    j--;
    var temp = digits[i - 1];
    digits[i - 1] = digits[j];
    digits[j] = temp;
    digits = digits.slice(0, i).concat(digits.slice(i).sort().reverse());
    var nextSmallerNumber = parseInt(digits.join(""));
    if (nextSmallerNumber < n && digits[0] !== 0) {
        return nextSmallerNumber;
    } else {
        return -1;
    }
}
