//JavaScript: 4 kyu - Explosive Sum
//https://www.codewars.com/kata/52ec24228a515e620b0005ef

function sum(num) {
    let partition = new Array(num + 1).fill(0);
    partition[0] = 1;
    for (let i = 1; i <= num; i++) {
        for (let j = i; j <= num; j++) {
            partition[j] += partition[j - i];
        }
    }
    return partition[num];
}
