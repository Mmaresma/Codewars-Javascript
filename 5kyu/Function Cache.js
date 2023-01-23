//JavaScript: 5 kyu - Function Cache
//https://www.codewars.com/kata/525481903700c1a1ff0000e1

function cache(func) {
  let cache = {};
  return function() {
    let key = JSON.stringify(arguments);
    if (cache[key]) {
      return cache[key].result;
    } else {
      let result = func.apply(this, arguments);
      cache[key] = { result: result, timestamp: new Date().getTime() };
      return result;
    }
  }
}
