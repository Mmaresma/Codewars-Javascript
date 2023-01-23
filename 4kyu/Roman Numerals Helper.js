//JavaScript: 4 kyu - Roman Numerals Helper
//https://www.codewars.com/kata/51b66044bce5799a7f000003

const RomanNumerals = {
  toRoman: (decimal) => {
    let result = "",
      NumEnDecimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      romano = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I",];

    NumEnDecimal.map(function (value, index) {
      while (decimal >= value) {
        result += romano[index];
        decimal -= value;
      }
    });

    return result;
  },
  fromRoman: (romano) => {
    const conversion = {M: 1000,CM: 900,D: 500,CD: 400,C: 100,XC: 90,L: 50,XL: 40,X: 10,IX: 9,V: 5,IV: 4,I: 1,};
    return romano
      .match(/CM|CD|XC|XL|IX|IV|\w/g)
      .reduce((accum, romano) => accum + conversion[romano], 0);
  },
};
