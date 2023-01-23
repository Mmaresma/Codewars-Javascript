//JavaScript: 5 kyu - Integers: Recreation One
//https://www.codewars.com/kata/55aa075506463dac6600010d

function listSquared(m, n) {
    let vArray = []
    for (let num = m; num <= n; num++) {
        let temporal = 0;
        for (let j = 1; j <= num; j++) {
            if (num % j == 0) {
                temporal += j*j;
            } 
        }
        if(Math.sqrt(temporal) % 1 == 0) {
                vArray.push([num, temporal]);
            }
    }
    return vArray;
}
