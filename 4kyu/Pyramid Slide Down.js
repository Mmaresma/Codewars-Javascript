//JavaScript: 4 kyu - Pyramid Slide Down
//https://www.codewars.com/kata/551f23362ff852e2ab000037

function longestSlideDown(pyramid) {
    for (var i = pyramid.length - 2; i >= 0; i--) {
        for (var j = 0; j < pyramid[i].length; j++) {
            pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
        }
    }
    return pyramid[0][0];
}
