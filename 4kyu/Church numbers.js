//JavaScript: 4 kyu - Church numbers
//https://www.codewars.com/kata/546dbd81018e956b51000077

const add = fm1 => fn2 => f => x => fm1 (f) (fn2 (f) (x))
const mul = fm1 => fn2 => f => x => fm1 (fn2 (f)) (x)
const pow = fm1 => fn2 => f => x => fn2 (fm1) (f) (x)
