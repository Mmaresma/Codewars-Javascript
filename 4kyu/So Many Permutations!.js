//JavaScript: 4 kyu - So Many Permutations!
//https://www.codewars.com/kata/5254ca2719453dcc0b00027d

function permutations(string) {
    let results = [];

    function backtrack(temp, chars) {
        if(temp.length === string.length) {
            results.push(temp);
        } else {
            for (let i = 0; i < chars.length; i++) {
                let newChars = chars.slice(0, i) + chars.slice(i+1);
                backtrack(temp + chars[i], newChars);
            }
        }
    }
    backtrack('', string);
    return Array.from(new Set(results));
}
