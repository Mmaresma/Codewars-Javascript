//JavaScript: 5 kyu - Common Denominators
//https://www.codewars.com/kata/54d7660d2daf68c619000d95

function convertFrac(lst) {
    var mcm = lcm_array(lst.map(x => x[1]));
    var result = "";
    for (var i = 0; i < lst.length; i++) {
        var newNum = mcm / lst[i][1] * lst[i][0];
        result += "(" + newNum + "," + mcm + ")";
    }
    return result;
}

function gcd(a, b) {
    if (b == 0) return a;
    else return gcd(b, a % b);
}

function lcm(a, b) {
    return a * b / gcd(a, b);
}

function lcm_array(arr) {
    var ans = arr[0];
    for (var i = 1; i < arr.length; i++) {
        ans = lcm(arr[i], ans);
    }
    return ans;
}
