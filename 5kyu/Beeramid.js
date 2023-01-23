//JavaScript: 5 kyu  - Beeramid
//https://www.codewars.com/kata/51e04f6b544cf3f6550000c1

function beeramid(bonus, price) {
    let level = 0;
    let totalCans = bonus / price;
    for (let i = 1; totalCans >= i * i; i++) {
        totalCans -= i * i;
        level++;
    }
    return level;
}
