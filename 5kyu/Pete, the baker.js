//JavaScript: 5 kyu - Pete, the baker
//https://www.codewars.com/kata/525c65e51bf619685c000059


function cakes(recipe, available) {
  let maxCakes = Infinity;
  for (let ingredient in recipe) {
    if (available[ingredient]) {
      let cakes = available[ingredient] / recipe[ingredient];
      if (cakes < maxCakes) {
        maxCakes = cakes;
      }
    } else {
      return 0;
    }
  }
  return Math.floor(maxCakes);
}
