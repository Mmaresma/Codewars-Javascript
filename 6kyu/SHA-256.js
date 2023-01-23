//JavaScript: 6 kyu - SHA-256
//https://www.codewars.com/kata/587fb57e12fc6eadf200009b

const crypto = require('crypto');

function sha256(string) {
  return crypto.createHash('sha256').update(string, 'utf8').digest('hex');
}

console.log(sha256("Hello World!"));
// Output: 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069
