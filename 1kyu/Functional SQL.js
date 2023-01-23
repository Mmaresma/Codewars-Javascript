//JavaScript: 1 kyu - Functional SQL
//https://www.codewars.com/kata/545434090294935e7d0010ab


function product(a, arr) {
  if (arr.length === 0) return a;
  let b = arr[0], res = [];
  for (let x of a) {
    for (let y of b) {
      res.push(x.concat(y));
    }
  }
  return product(res, arr.slice(1));
}

function query() {
  const state = { where: [], having: [] };
  const query = {
    select(fn) {
      if (state.select) throw new Error('Duplicate SELECT');
      state.select = fn || (x => x);
      return query;
    },
    from(a, ...arr) {
      if (state.from) throw new Error('Duplicate FROM');
      state.from = () => (arr.length === 0 ? a : product(a.map(x => [x]), arr));
      return query;
    },
    where(...fns) {
      state.where.push(x => fns.some(fn => fn(x)));
      return query;
    },
    orderBy(fn) {
      if (state.orderBy) throw new Error('Duplicate ORDERBY');
      state.orderBy = fn;
      return query;
    },
    groupBy(...fns) {
      if (state.groupBy) throw new Error('Duplicate GROUPBY');
      state.groupBy = a =>
        a.reduce((res, row) => {
          let a = res,
            b;
          for (let fn of fns) {
            const group = fn(row);
            const i = a.findIndex(x => x[0] === group);
            if (i < 0) a.push([group, (a = [])]);
            else a = a[i][1];
          }
          a.push(row);
          return res;
        }, []);
      return query;
    },
    having(...fns) {
      state.having.push(x => fns.some(fn => fn(x)));
      return query;
    },
    execute() {
      let res = state.from ? state.from() : [];
      res = res.filter(x => state.where.every(fn => fn(x)));
      if (state.groupBy) res = state.groupBy(res);
      res = res.filter(x => state.having.every(fn => fn(x)));
      if (state.orderBy) res.sort(state.orderBy);
      return state.select ? res.map(state.select) : res;
    },
  };
  return query;
}
